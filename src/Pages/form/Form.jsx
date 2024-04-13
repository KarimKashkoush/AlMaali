import './form.css'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        studentName: '',
        semester: '',
        StudentDateOfBirth: '',
        studentIdNumber: '',
        fatherName: '',
        residenceStatus: '',
        fatherIdNumber: '',
        fatherJob: '',
        fatherPhoneNumber: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIOafGNb08HrIshQqCr7br80BDXMIN3nZm8jHFF4mFgwEPx0ANJntsfWJFNYqGEh9YCw/exec'

    const form = document.forms['contact-form']

    function submit(e) {
        e.preventDefault()
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        } else {
            setErrors(validationErrors);
        }
    }

    const validateFormData = (data) => {
        const errors = {};

        if (data.studentName.trim() == "") {
            errors.studentName = 'اسم الطالب مطلوب';
            document.getElementById("nameStd").classList.remove("succes");
            document.getElementById("nameStd").classList.add("error");
        } else if (data.studentName.trim().length < 6) {
            errors.studentName = "يرجي ادخال اسم الطالب رباعي وبشكل صحيح"
            document.getElementById("nameStd").classList.remove("succes");
            document.getElementById("nameStd").classList.add("error");
        } else {
            document.getElementById("nameStd").classList.remove("error");
            document.getElementById("nameStd").classList.add("succes");
        }

        if (data.semester == "") {
            errors.semester = "يرجي اختيار الفصل الدراسي";
            document.getElementById("semester").classList.remove("succes");
            document.getElementById("semester").classList.add("error");
        } else {
            document.getElementById("semester").classList.remove("error");
            document.getElementById("semester").classList.add("succes");
        }

        if (data.StudentDateOfBirth === "") {
            errors.StudentDateOfBirth = "يرجي ادخال تاريخ الميلاد";
            document.getElementById("dateStd").classList.remove("succes");
            document.getElementById("dateStd").classList.add("error");
        } else {
            document.getElementById("dateStd").classList.remove("error");
            document.getElementById("dateStd").classList.add("succes");
        }

        if (data.studentIdNumber == "") {
            errors.studentIdNumber = "برجاء ادخال رقم السجل المدني للطالب";
            document.getElementById("nationalIdStd").classList.remove("succes");
            document.getElementById("nationalIdStd").classList.add("error");
        } else if (data.studentIdNumber.length != 10) {
            document.getElementById("nationalIdStd").classList.remove("succes");
            document.getElementById("nationalIdStd").classList.add("error");
            errors.studentIdNumber = "الرقم المدني يتكونمن 10 أرقام "
        } else {
            document.getElementById("nationalIdStd").classList.remove("error");
            document.getElementById("nationalIdStd").classList.add("succes");
        }

        if (data.fatherName.trim() == "") {
            errors.fatherName = 'اسم ولي الأمر مطلوب';
            document.getElementById("nameFa").classList.remove("succes");
            document.getElementById("nameFa").classList.add("error");
        } else if (data.fatherName.trim().length < 6) {
            errors.fatherName = "يرجي ادخال اسم ولي الأمر رباعي وبشكل صحيح"
            document.getElementById("nameFa").classList.remove("succes");
            document.getElementById("nameFa").classList.add("error");
        } else {
            document.getElementById("nameFa").classList.remove("error");
            document.getElementById("nameFa").classList.add("succes");
        }

        if (data.residenceStatus == "") {
            errors.residenceStatus = "مطلوب";
            document.getElementById("nationalFa").classList.remove("succes");
            document.getElementById("nationalFa").classList.add("error");
        } else {
            document.getElementById("nationalFa").classList.remove("error");
            document.getElementById("nationalFa").classList.add("succes");
        }

        if (data.fatherIdNumber == "") {
            errors.fatherIdNumber = "برجاء ادخال رقم السجل المدني لولي الأمر";
            document.getElementById("nationalIdFa").classList.remove("succes");
            document.getElementById("nationalIdFa").classList.add("error");
        } else if (data.fatherIdNumber.trim().length != 10) {
            document.getElementById("nationalIdFa").classList.remove("succes");
            document.getElementById("nationalIdFa").classList.add("error");
            errors.fatherIdNumber = "الرقم المدني يتكون من 10 أرقام "
        } else {
            document.getElementById("nationalIdFa").classList.remove("error");
            document.getElementById("nationalIdFa").classList.add("succes");
        }

        if (data.fatherJob == "") {
            errors.fatherJob = "المسمي الوظيفي مطلوب";
            document.getElementById("job").classList.remove("succes");
            document.getElementById("job").classList.add("error");
        } else if (data.fatherJob.trim().length < 3) {
            document.getElementById("job").classList.remove("succes");
            document.getElementById("job").classList.add("error");
            errors.fatherJob = "أدخل المسمي الوظيفي بشكل صحيح"
        } else {
            document.getElementById("job").classList.remove("error");
            document.getElementById("job").classList.add("succes");
        }

        if (data.fatherPhoneNumber == "") {
            errors.fatherPhoneNumber = "رقم الهاتف مطلوب";
            document.getElementById("number").classList.remove("succes");
            document.getElementById("number").classList.add("error");
        } else if (data.fatherPhoneNumber.trim().length < 7) {
            document.getElementById("number").classList.remove("succes");
            document.getElementById("number").classList.add("error");
            errors.fatherPhoneNumber = "أدخل الرقم بشكل صحيح"
        } else {
            document.getElementById("number").classList.remove("error");
            document.getElementById("number").classList.add("succes");
        }

        return errors;
    };


    // /==========================================================/ //
    function open() {
        if (document.getElementById('nationalFa').value === "مقيم") {
            document.getElementById("other").style.display = "block"
        } else {
            document.getElementById("other").style.display = "none"
        }
    }

    return (
        <section className="form" >
            <section className="container">
                <form name='contact-form' onSubmit={(e) => { submit(e) }}>
                    <h1 className='form-section-title'>المعلومات الدراسية</h1>
                    <section>
                        <label htmlFor="semester" >السنة الدراسية المراد التسجيل بها للعام الدراسي الجديد 2024 - 2025</label>
                        <select id='semester' name='semester' onChange={handleChange}>
                            <option value="" selected>الصف الدراسي ؟</option>
                            <option value="الصف الأول الابتدائي">الصف الأول الابتدائي</option>
                            <option value="الصف الثاني الابتدائي">الصف الثاني الابتدائي</option>
                            <option value="الصف الثالث الابتدائي">الصف الثالث الابتدائي</option>
                            <option value="الصف الرابع الابتدائي">الصف الرابع الابتدائي</option>
                            <option value="الصف الخامس الابتدائي">الصف الخامس الابتدائي</option>
                            <option value="الصف السادس الابتدائي">الصف السادس الابتدائي</option>
                            <option value="الصف الأول المتوسط">الصف الأول المتوسط</option>
                            <option value="الصف الثاني المتوسط">الصف الثاني المتوسط</option>
                            <option value="الصف الثالث المتوسط">الصف الثالث المتوسط</option>
                            <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
                            <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
                            <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
                        </select>
                        {errors.semester && <div className="errorma">{errors.semester}</div>}
                    </section>
                    <h1 className='form-section-title'>بيانات الطالب</h1>

                    <section className="name">
                        <label htmlFor="nameStd">اسم الطالب</label>
                        <input type="text" id='nameStd' name='studentName' onChange={handleChange}/>
                        {errors.studentName && <div className="errorma">{errors.studentName}</div>}
                    </section>

                    <section className="StudentDate">
                        <label htmlFor="dateStd">تاريخ ميلاد</label>
                        <input type="date" name='StudentDateOfBirth' id='dateStd' onChange={handleChange} />
                        {errors.StudentDateOfBirth && <div className="errorma">{errors.StudentDateOfBirth}</div>}
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalIdStd">رقم السجل المدني</label>
                        <input type="text" id='nationalIdStd' name='studentIdNumber' onChange={handleChange} />
                        {errors.studentIdNumber && <div className="errorma">{errors.studentIdNumber}</div>}
                    </section>

                    <h1 className='form-section-title'>بيانات ولي الأمر</h1>

                    <section className="name">
                        <label htmlFor="nameFa">الاسم</label>
                        <input type="text" id='nameFa' name='fatherName' onChange={handleChange} />
                        {errors.fatherName && <div className="errorma">{errors.fatherName}</div>}
                    </section>

                    <section className="national">
                        <label htmlFor="nationalFa">مواطن أم مقيم ؟</label>
                        <select name="residenceStatus" id="nationalFa" onBlur={handleChange} onChange={() => { open() }} >
                            <option value="" selected>مواطن أم مقيم ؟</option>
                            <option value="sa">مواطن</option>
                            <option value="ot">مقيم</option>
                        </select>
                        {errors.residenceStatus && <div className="errorma">{errors.residenceStatus}</div>}
                        <input type="text" id='other' name="nationality" placeholder='ماهي جنسيتك ؟' className='other' />
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalIdFa">رقم السجل المدني</label>
                        <input type="text" id='nationalIdFa' name='fatherIdNumber' onChange={handleChange} />
                        {errors.fatherIdNumber && <div className="errorma">{errors.fatherIdNumber}</div>}
                    </section>

                    <section className="job">
                        <label htmlFor="job">الوظيفة</label>
                        <input type="text" id='job' name='fatherJob' onChange={handleChange} />
                        {errors.fatherJob && <div className="errorma">{errors.fatherJob}</div>}
                    </section>

                    <section className="number">
                        <label htmlFor="number">رقم هاتف للتواصل (يوجد حساب واتساب)</label>
                        <input type="text" id='number' name='fatherPhoneNumber' onChange={handleChange} />
                        {errors.fatherPhoneNumber && <div className="errorma">{errors.fatherPhoneNumber}</div>}
                    </section>

                    <button>إرسال البيانات</button>
                </form>
            </section>
        </section>
    )
}

export default Form
