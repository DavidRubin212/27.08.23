var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(firstName, lastName, IdNumber) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.IdNumber = IdNumber;
        return _this;
    }
    Patient.prototype.ShowPatientDeatails = function () {
        console.log("the deatails of ".concat(this.firstName, ", ").concat(this.lastName, " ").concat(this.IdNumber));
    };
    return Patient;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(firstName, lastName, IdDoctor, specialization) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.IdDoctor = IdDoctor;
        _this.specialization = specialization;
        return _this;
    }
    Doctor.prototype.AllDocDeatails = function () {
        console.log("doctor ".concat(this.firstName, " ").concat(this.lastName, " specialize in ").concat(this.specialization, " and the number is ").concat(this.IdDoctor));
    };
    return Doctor;
}(Person));
var Appointment = /** @class */ (function () {
    function Appointment(patient, doctor, date, time) {
        this.doctor = doctor;
        this.patient = patient;
        this.date = date;
        this.time = time;
    }
    Appointment.prototype.ApointmentDeatails = function () {
        console.log("Appointment Details:");
        console.log("Date: ".concat(this.date, ", Time: ").concat(this.time));
        console.log("Patient: ".concat(this.patient.firstName, " ").concat(this.patient.lastName));
        console.log("Doctor: ".concat(this.doctor.lastName));
    };
    return Appointment;
}());
// const appointment1 = new Appointment(
// 	Patient1,
// 	doctor1,
// 	"2023-08-31",
// 	"10:00 AM"
// );
// appointment1.ApointmentDeatails();
var Hospital = /** @class */ (function () {
    function Hospital(name) {
        (this.name = name),
            (this.patients = []),
            (this.doctors = []),
            (this.appointments = []);
    }
    Hospital.prototype.addPatient = function (patient) {
        this.patients.push(patient);
    };
    Hospital.prototype.addDoctor = function (doctor) {
        this.doctors.push(doctor);
    };
    Hospital.prototype.addAppointment = function (appointment) {
        this.appointments.push(appointment);
    };
    Hospital.prototype.displayDoctorAppointments = function () {
        console.log("All Appointments:");
        for (var _i = 0, _a = this.appointments; _i < _a.length; _i++) {
            var appointment = _a[_i];
            appointment.ApointmentDeatails();
        }
    };
    Hospital.prototype.displayDoctorAppointment = function (IdDoctor) {
        console.log("appointments for Doctor ".concat(IdDoctor));
        for (var _i = 0, _a = this.appointments; _i < _a.length; _i++) {
            var appointment = _a[_i];
            if (appointment.doctor.IdDoctor === IdDoctor)
                appointment.ApointmentDeatails();
        }
    };
    Hospital.prototype.displayPatientAppointment = function (IdNumber) {
        console.log("appointments for num ".concat(IdNumber));
        for (var _i = 0, _a = this.appointments; _i < _a.length; _i++) {
            var appointment = _a[_i];
            if (appointment.patient.IdNumber === IdNumber)
                appointment.ApointmentDeatails();
        }
    };
    Hospital.prototype.displayTodayAppointment = function () {
        var today = new Date().toISOString().split('T')[0];
        console.log("Appointments for Today (".concat(today, "):"));
        for (var _i = 0, _a = this.appointments; _i < _a.length; _i++) {
            var appointment = _a[_i];
            if (appointment.date === today) {
                appointment.ApointmentDeatails();
            }
        }
    };
    return Hospital;
}());
var hospital = new Hospital("My Hospital");
// Create instances of patients and doctors
var patient1 = new Patient("John", "Doe", 123);
var doctor1 = new Doctor("Dr. Jane", "Smith", 456, "Cardiology");
// Create appointments
var appointment1 = new Appointment(patient1, doctor1, "2023-08-27", "10:00 AM");
var appointment2 = new Appointment(patient1, doctor1, "2023-08-31", "02:00 PM");
hospital.addAppointment(appointment1);
hospital.displayTodayAppointment();
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
