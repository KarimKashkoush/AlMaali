import './home.css'
import logo from '../../../public/image/logo.png'

import bgpen1 from '../../../public/image/pen-1.svg'
import bgpen2 from '../../../public/image/pen-2.svg'
import bgpen3 from '../../../public/image/pen-3.svg'
import bgpen4 from '../../../public/image/pen-4.svg'
import bgpen5 from '../../../public/image/pen-5.svg'
import bgpen6 from '../../../public/image/pen-6.svg'
import bgpen7 from '../../../public/image/pen-7.svg'
import bgpen8 from '../../../public/image/pen-8.svg'
import bgpen9 from '../../../public/image/pen-9.svg'
import bgpen10 from '../../../public/image/pen-10.svg'
import bgbook1 from '../../../public/image/book-1.svg'
import bgbook2 from '../../../public/image/book-2.svg'
import bgbook3 from '../../../public/image/book-3.svg'
import bgbook4 from '../../../public/image/book-4.svg'
import bgbook5 from '../../../public/image/book-5.svg'
import bgbook6 from '../../../public/image/book-6.svg'
import bgbook7 from '../../../public/image/book-7.svg'
import bgbook8 from '../../../public/image/book-8.svg'
import bgbook9 from '../../../public/image/book-9.svg'
import bgbook10 from '../../../public/image/book-10.svg'

import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="home">
            <section className="container">
                <section className="image">
                    <img src={logo} />
                </section>
                <h2 className="section-title">مدارس المعالي الإبداعية الأهلية ترحب بكم .</h2>
                <p className='subtitle'>مدرسة المعالي ترحب بكم بفخر واعتزاز!
                    <br />
                    <br />
                    نحن في مدرسة المعالي نفتخر بتقديم بيئة تعليمية مميزة تهدف إلى تطوير شامل لطلابنا. نرحب بأولياء الأمور الكرام والطلاب الأعزاء للانضمام إلينا في رحلة تعليمية مثيرة ومليئة بالإثراء.
                    <br />
                    <br />
                    نعلن بكل فخر وسرور عن بدء عملية التسجيل للسنة الدراسية الجديدة 2024-2025. ففي مدرسة المعالي، نسعى جاهدين لتقديم تجربة تعليمية مميزة تتميز بالجودة والاهتمام الشخصي بكل طالب.
                    <br />
                    <br />
                    ندعوكم للانضمام إلينا والاستفادة من برامجنا التعليمية المتميزة والفرص الرائعة التي نقدمها لطلابنا. لا تترددوا في التواصل معنا لمزيد من المعلومات حول عملية التسجيل وبرامجنا التعليمية المتنوعة.
                    <br />
                    <br />
                    نحن في انتظاركم لنبني مستقبل مشرق ونساهم سويًا في تحقيق أحلام أطفالنا ونجاحهم المستقبلي.</p>
                <br />
                <br />
                <button><Link to=''>التسجيل الأن <span><i className="fa-solid fa-sheet-plastic"></i></span></Link></button>
            </section>
            <section className='bg'>
                <img className='icon-bg bgpen1' src= {bgpen1} />
                <img className='icon-bg bgpen2' src= {bgpen2} />
                <img className='icon-bg bgpen3' src= {bgpen3} />
                <img className='icon-bg bgpen4' src= {bgpen4} />
                <img className='icon-bg bgpen5' src= {bgpen5} />
                <img className='icon-bg bgpen6' src= {bgpen6} />
                <img className='icon-bg bgpen7' src= {bgpen7} />
                <img className='icon-bg bgpen8' src= {bgpen8} />
                <img className='icon-bg bgpen9' src= {bgpen9} />
                <img className='icon-bg bgpen10' src= {bgpen10} />
                <img className='icon-bg bgbook1' src= {bgbook1} />
                <img className='icon-bg bgbook2' src= {bgbook2} />
                <img className='icon-bg bgbook3' src= {bgbook3} />
                <img className='icon-bg bgbook4' src= {bgbook4} />
                <img className='icon-bg bgbook5' src= {bgbook5} />
                <img className='icon-bg bgbook6' src= {bgbook6} />
                <img className='icon-bg bgbook7' src= {bgbook7} />
                <img className='icon-bg bgbook8' src= {bgbook8} />
                <img className='icon-bg bgbook9' src= {bgbook9} />
                <img className='icon-bg bgbook10' src= {bgbook10} />
            </section>
        </section>
    )
}

export default Home