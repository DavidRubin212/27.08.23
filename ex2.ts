class Person {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

class Patient extends Person {
	IdNumber: number;
	constructor(firstName: string, lastName: string, IdNumber: number) {
		super(firstName, lastName);
		this.IdNumber = IdNumber;
	}

	ShowPatientDeatails(): void {
		console.log(
			`the deatails of ${this.firstName}, ${this.lastName} ${this.IdNumber}`
		);
	}
}

class Doctor extends Person {
	IdDoctor: number;
	specialization: string;
	constructor(
		firstName: string,
		lastName: string,
		IdDoctor: number,
		specialization: string
	) {
		super(firstName, lastName);
		this.IdDoctor = IdDoctor;
		this.specialization = specialization;
	}
	AllDocDeatails(): void {
		console.log(
			`doctor ${this.firstName} ${this.lastName} specialize in ${this.specialization} and the number is ${this.IdDoctor}`
		);
	}
}
class Appointment {
	patient: Patient;
	doctor: Doctor;
	date: string;
	time: string;
	constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
		this.doctor = doctor;
		this.patient = patient;
		this.date = date;
		this.time = time;
	}
	ApointmentDeatails(): void {
		console.log(`Appointment Details:`);
		console.log(`Date: ${this.date}, Time: ${this.time}`);
		console.log(`Patient: ${this.patient.firstName} ${this.patient.lastName}`);
		console.log(`Doctor: ${this.doctor.lastName}`);
	}
}

// const appointment1 = new Appointment(
// 	Patient1,
// 	doctor1,
// 	"2023-08-31",
// 	"10:00 AM"
// );
// appointment1.ApointmentDeatails();

class Hospital {
	name: string;
	patients: Patient[];
	doctors: Doctor[];
	appointments: Appointment[];
	constructor(name: string) {
		(this.name = name),
			(this.patients = []),
			(this.doctors = []),
			(this.appointments = []);
	}

	addPatient(patient: Patient): void {
		this.patients.push(patient);
	}
	addDoctor(doctor: Doctor): void {
		this.doctors.push(doctor);
	}
	addAppointment(appointment: Appointment): void {
		this.appointments.push(appointment);
	}
	displayDoctorAppointments(): void {
		console.log("All Appointments:");
		for (const appointment of this.appointments) {
			appointment.ApointmentDeatails();
		}
	}
	displayDoctorAppointment(IdDoctor: number): void {
		console.log(`appointments for Doctor ${IdDoctor}`);
		for (const appointment of this.appointments) {
			if (appointment.doctor.IdDoctor === IdDoctor)
				appointment.ApointmentDeatails();
		}
	}
    displayPatientAppointment(IdNumber:number): void {
		console.log(`appointments for num ${IdNumber}`);
		for (const appointment of this.appointments) {
			if (appointment.patient.IdNumber === IdNumber)
				appointment.ApointmentDeatails();
		}
	}
    displayTodayAppointment():void{
        const today = new Date().toISOString().split('T')[0];
        console.log(`Appointments for Today (${today}):`);
        for (const appointment of this.appointments) {
            if (appointment.date === today) {
                appointment.ApointmentDeatails();
            }
        }
    }
}
const hospital = new Hospital("My Hospital");

// Create instances of patients and doctors
const patient1 = new Patient("John", "Doe", 123);
const doctor1 = new Doctor("Dr. Jane", "Smith", 456, "Cardiology");

// Create appointments
const appointment1 = new Appointment(
	patient1,
	doctor1,
	"2023-08-27",
	"10:00 AM"
);
const appointment2 = new Appointment(
	patient1,
	doctor1,
	"2023-08-31",
	"02:00 PM"
);
hospital.addAppointment(appointment1);
hospital.displayTodayAppointment()
 
// let doctor1 = new Doctor("mike", "popai", 455, "family");
// // doctor1.AllDocDeatails()

// let Patient1 = new Patient("david", "Rubin", 456);

// const appointment1 = new Appointment(
// 	Patient1,
// 	doctor1,
// 	"2023-08-31",
// 	"10:00 AM"
// );
// const appointment2 = new Appointment(
// 	Patient1,
// 	doctor1,
// 	"2023-08-31",
// 	"02:00 PM"
// );

// console.log(254);

// Patient1.ShowPatientDeatails()
