import './form.css'

function Form() {
    return (
        <section className="form">
            <section className="container">
                <form>
                    <h1 className='form-section-title'>المعلومات الدراسية</h1>
                    <section>
                        <label htmlFor="Semester">السنة الدراسية المراد التسجيل بها للعام الدراسي الجديد 2024 - 2025</label>
                        <select id='Semester'>
                            <option value="">الصف الأول الإبتدائي</option>
                            <option value="">الصف الثاني الإبتدائي</option>
                            <option value="">الصف الثالث الإبتدائي</option>
                            <option value="">الصف الرابع الإبتدائي</option>
                            <option value="">الصف الخامس الإبتدائي</option>
                            <option value="">الصف السادس الإبتدائي</option>
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

                    <section className="national">
                        <label htmlFor="national">الجنسية</label>
                        <select name="national" id="national">
                            <option value="sa">المملكة العربية السعودية</option>
                            <option value="00">أخري</option>
                        </select>
                        <section className="national-another">
                            <input type="text" id='nationalAnother' />
                        </section>
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
                        <label htmlFor="date">تاريخ ميلاد </label>
                        <input type="date" id='date' />
                    </section>

                    <section className="national">
                        <label htmlFor="national">الجنسية</label>
                        <select name="national" id="national">
                            <option value="sa">المملكة العربية السعودية</option>
                            <option value="00">أخري</option>
                        </select>
                        <section className="national-another">
                            <input type="text" id='nationalAnother' />
                        </section>
                    </section>

                    <section className="national-id">
                        <label htmlFor="nationalId">رقم الهوية الوطنية</label>
                        <input type="text" id='nationalId' />
                    </section>

                    <section className="image">
                        <label htmlFor="image">صورة الهوية الوطنية</label>
                        <input type="file" id='image' />
                    </section>

                    <button>إرسال البيانات</button>
                </form>
            </section>
        </section>
    )
}

export default Form