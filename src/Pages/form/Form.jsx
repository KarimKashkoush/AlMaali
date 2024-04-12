import './form.css'
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

function Form() {
    
    function open() {
        let sel = document.getElementById("national");
        if (sel.value === "مقيم") {
            document.getElementById("other").style.display = "block"
        } else {
            document.getElementById("other").style.display = "none"
        }

    }
    return (
        <section className="form">
            <section className="container">
                <form>
                    <h1 className='form-section-title'>المعلومات الدراسية</h1>
                    <section>
                        <label htmlFor="Semester">السنة الدراسية المراد التسجيل بها للعام الدراسي الجديد 2024 - 2025</label>
                        <select id='Semester'>
                            <option value="">الصف الأول الابتدائي</option>
                            <option value="">الصف الثاني الابتدائي</option>
                            <option value="">الصف الثالث الابتدائي</option>
                            <option value="">الصف الرابع الابتدائي</option>
                            <option value="">الصف الخامس الابتدائي</option>
                            <option value="">الصف السادس الابتدائي</option>
                            <option value="">الصف الأول المتوسط</option>
                            <option value="">الصف الثاني المتوسط</option>
                            <option value="">الصف الثالث المتوسط</option>
                            <option value="">الصف الأول الثانوي</option>
                            <option value="">الصف الثاني الثانوي</option>
                            <option value="">الصف الثالث الثانوي</option>
                        </select>
                    </section>
                    <h1 className='form-section-title'>بيانات الطالب</h1>

                    <section className="name">
                        <label htmlFor="name">اسم الطالب</label>
                        <input type="text" id='name' />
                    </section>

                    <section className="date">
                        <label htmlFor="date">تاريخ ميلاد</label>
                        <input type="date" id='date' />
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalId">رقم الهوية الوطنية</label>
                        <input type="text" id='nationalId' />
                    </section>

                    <section className="image-student">
                        <label htmlFor="imageStudent">صورة شهادة الميلاد</label>
                        <input type="file" id='imageStudent' />
                    </section>

                    <h1 className='form-section-title'>بيانات ولي الأمر</h1>

                    <section className="name">
                        <label htmlFor="name">الاسم</label>
                        <input type="text" id='name' />
                    </section>

                    <section className="date">
                        <label htmlFor="dateFa">تاريخ ميلاد </label>
                        <input type="date" id='dateFa' />
                    </section>

                    <section className="national">
                        <label htmlFor="national">مواطن أم مقيم ؟</label>
                        <select name="national" id="national" onChange={()=>{open()}}>
                            <option value="" selected>مواطن أم مقيم ؟</option>
                            <option value="مواطن">مواطن</option>
                            <option value="مقيم">مقيم</option>
                        </select>
                        <input type="text" id='other' placeholder='ماهي جنسيتك ؟' className='other' />
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalId">رقم السجل المدني</label>
                        <input type="text" id='nationalId' />
                    </section>

                    <section className="image">
                        <label htmlFor="image">صورة الهوية الوطنية</label>
                        <input type="file" id='image' />
                    </section>

                    <section className="job">
                        <label htmlFor="job">الوظيفة</label>
                        <input type="text" id='job' />
                    </section>

                    <section className="number">
                        <label htmlFor="job">رقم هاتف للتواصل (يوجد حساب واتساب)</label>
                        <input type="text" id='job' />
                    </section>

                    <button>إرسال البيانات</button>
                </form>
            </section>
        </section>
    )
}

export default Form