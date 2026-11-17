
package com.medicare.service;

import com.medicare.dto.PatientDto;
import com.medicare.entity.Doctor;
import com.medicare.entity.Patient;
import com.medicare.exception.ResourceNotFoundException;
import com.medicare.repository.ActivityRepository;
import com.medicare.repository.DoctorRepository;
import com.medicare.repository.PatientRepository;
import com.medicare.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class PatientServiceTest {

    private PatientRepository patientRepository;
    private PatientService patientService;
    private DoctorRepository doctorRepository;

    @BeforeEach
    void setUp() {
        patientRepository = mock(PatientRepository.class);
        ActivityRepository activityRepository = mock(ActivityRepository.class);
        doctorRepository = mock(DoctorRepository.class);
        UserRepository userRepository = mock(UserRepository.class);

        patientService = new PatientService(
                patientRepository,
                activityRepository,
                doctorRepository,
                userRepository
        );
    }

    @Test
    void filtersPatientRecordsWithoutUsingBrowserSeedData() {
        Patient patient = new Patient(
                1L, "PAT-001", "Test Patient", 48, "Female", "O+",
                "555-0100", null, "Hypertension", "Dr. Test Doctor",
                "Admitted", "Test address", LocalDate.now()
        );

        when(patientRepository.findAll()).thenReturn(List.of(patient));

        List<PatientDto> patients =
                patientService.getAll("hypertension", null, null);

        assertEquals(1, patients.size());
        assertEquals("Test Patient", patients.get(0).getName());
    }

    @Test
    void persistsNewPatientAndLinksTheSelectedDoctor() {
        when(patientRepository.count()).thenReturn(0L);

        Doctor doctor = new Doctor(
                1L, "DOC-101", "Dr. Test Doctor", "MD", "Cardiology", 5,
                BigDecimal.valueOf(100), null, null, "Available",
                BigDecimal.valueOf(4.5), 1, null, null
        );

        when(doctorRepository.findByNameIgnoreCase("Dr. Test Doctor"))
                .thenReturn(Optional.of(doctor));

        when(patientRepository.save(any(Patient.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        PatientDto request = new PatientDto();
        request.setName("New Test Patient");
        request.setAge(52);
        request.setGender("Female");
        request.setPhone("555-0200");
        request.setDoctor("Dr. Test Doctor");

        PatientDto saved = patientService.save(request);

        assertNotNull(saved.getId());
        assertTrue(saved.getId().startsWith("PAT-"));
        assertEquals("Dr. Test Doctor", saved.getDoctor());
    }

    @Test
    void missingPatientIsNotReturned() {
        when(patientRepository.findByPatientIdIgnoreCase("PAT-9999"))
                .thenReturn(Optional.empty());

        assertThrows(
                ResourceNotFoundException.class,
                () -> patientService.getById("PAT-9999")
        );
    }

    @Test
    void rejectsPatientRegistrationWhenSelectedDoctorDoesNotExist() {
        when(patientRepository.count()).thenReturn(0L);

        when(doctorRepository.findByNameIgnoreCase("Unknown Doctor"))
                .thenReturn(Optional.empty());

        PatientDto request = new PatientDto();
        request.setName("Test Patient");
        request.setAge(30);
        request.setGender("Female");
        request.setDoctor("Unknown Doctor");

        ResourceNotFoundException exception = assertThrows(
                ResourceNotFoundException.class,
                () -> patientService.save(request)
        );

        assertEquals(
                "The selected doctor profile was not found.",
                exception.getMessage()
        );
    }
}
