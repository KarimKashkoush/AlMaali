import './form.css'
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        studentName: '',
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
            // 
        } else {
            setErrors(validationErrors);
        }
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    }

    const validateFormData = (data) => {
        const errors = {};
        if (data.studentName.trim() == "") {
            errors.studentName = 'اسم الطالب مطلوب';
        } else if (data.studentName.trim().length < 6) {
            errors.studentName = "يرجي ادخال اسم الطالب رباعي وبشكل صحيح"
        } else {
            errors.studentName = ""
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
                        <label htmlFor="semester">السنة الدراسية المراد التسجيل بها للعام الدراسي الجديد 2024 - 2025</label>
                        <select id='semester' name='semester'>
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
                    </section>
                    <h1 className='form-section-title'>بيانات الطالب</h1>

                    <section className="name">
                        <label htmlFor="nameStd">اسم الطالب</label>
                        <input type="text" id='nameStd' name='studentName' onChange={handleChange} />
                        {errors.studentName && <div className="errorma">{errors.studentName}</div>}
                    </section>

                    <section className="date">
                        <label htmlFor="dateStd">تاريخ ميلاد</label>
                        <input type="date" id='dateStd' name='Student-date-of-birth' />
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalIdStd">رقم السجل المدني</label>
                        <input type="text" id='nationalIdStd' name='student-id-number' />
                    </section>

                    <h1 className='form-section-title'>بيانات ولي الأمر</h1>

                    <section className="name">
                        <label htmlFor="nameFa">الاسم</label>
                        <input type="text" id='nameFa' name='father-name' />
                    </section>

                    <section className="date">
                        <label htmlFor="dateFa">تاريخ ميلاد </label>
                        <input type="date" id='dateFa' name='father-date-of-birth' />
                    </section>

                    <section className="national">
                        <label htmlFor="nationalFa">مواطن أم مقيم ؟</label>
                        <select name="residence-status" id="nationalFa" onChange={() => { open() }}>
                            <option value="" selected>مواطن أم مقيم ؟</option>
                            <option value="مواطن">مواطن</option>
                            <option value="مقيم">مقيم</option>
                        </select>
                        <input type="text" id='other' name="nationality" placeholder='ماهي جنسيتك ؟' className='other' />
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalIdFa">رقم السجل المدني</label>
                        <input type="text" id='nationalIdFa' name='father-id-number' />
                    </section>

                    <section className="job">
                        <label htmlFor="job">الوظيفة</label>
                        <input type="text" id='job' name='father-job' />
                    </section>

                    <section className="number">
                        <label htmlFor="number">رقم هاتف للتواصل (يوجد حساب واتساب)</label>
                        <input type="number" id='number' name='father-phone-number' />
                    </section>

                    <button>إرسال البيانات</button>
                </form>
            </section>
        </section>
    )
}

export default Form