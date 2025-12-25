import React from 'react';
import Navbar from './components/Navbar';
import CourseAssistant from './components/CourseAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import { CourseModule } from './types';

const App: React.FC = () => {
  const modules: CourseModule[] = [
    {
      id: 1,
      title: "أساسيات الأمن السيبراني",
      description: "فهم المفاهيم الأساسية، مثلث الحماية (CIA)، وأهمية الأمن في العصر الرقمي.",
      icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    },
    {
      id: 2,
      title: "القوانين والأخلاقيات",
      description: "وحدة إلزامية تغطي الجوانب القانونية، الالتزام الأخلاقي، وحدود العمل المهني.",
      icon: <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.22 0 2.383.219 3.46.622m1.34 3.033l.055.09a10.003 10.003 0 011.605 5.255" />
    },
    {
      id: 3,
      title: "آلية عمل الويب",
      description: "دراسة عميقة لبروتوكولات HTTP/HTTPS، هيكلة الطلبات، وكيفية تفاعل المتصفح مع الخادم.",
      icon: <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    },
    {
      id: 4,
      title: "الثغرات الشائعة (نظري)",
      description: "التعرف على أهم الثغرات مثل SQL Injection و XSS وكيفية حدوثها برمجياً.",
      icon: <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    },
    {
      id: 5,
      title: "المختبرات التعليمية الموجهة",
      description: "تطبيق عملي في بيئة سحابية معزولة تماماً وآمنة بنسبة 100% للمبتدئين.",
      icon: <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.675.338a4 4 0 01-2.58.344l-2.006-.401a2 2 0 01-1.314-1.077l-1.428-3.09a2 2 0 01.12-2.112l1.644-2.466a2 2 0 012.316-.761l2.557.852a4 4 0 012.274 2.164l.322.805a2 2 0 001.127 1.127l.805.322a4 4 0 012.164 2.274l.852 2.557a2 2 0 01-.761 2.316l-2.466 1.644a2 2 0 01-2.112.12l-3.09-1.428a2 2 0 01-1.077-1.314l-.401-2.006a4 4 0 01.344-2.58l.338-.675a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022L15.428 1.572" />
    },
    {
      id: 6,
      title: "عقلية المدافع والمختبر",
      description: "كيف يفكر المحترفون الأمنيون في حماية الأنظمة وتوقع الثغرات قبل حدوثها.",
      icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
    },
    {
      id: 7,
      title: "مقدمة في الأدوات (نظري)",
      description: "استعراض الأدوات المهنية المستخدمة في الفحص والتحليل دون ممارسات غير قانونية.",
      icon: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    },
    {
      id: 8,
      title: "خارطة الطريق المستقبلية",
      description: "رسم مسار مهني واضح بعد الدورة، الشهادات المعتمدة، وكيفية التطوير المستمر.",
      icon: <path d="M9 20l-6-3V4l6 3m6-3l6 3v13l-6-3m-6 3V7m6 13V7" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden font-tajawal">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-950 text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-right space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-bold text-sm tracking-wide">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                التسجيل متاح الآن في أكاديمية الخبراء
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                كُن من <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">نخبة الخبراء</span> <br/>
                في الأمن السيبراني
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                دورة تدريبية مكثفة للمبتدئين. نأخذك من الصفر لتتقن فن حماية الأنظمة واكتشاف الثغرات بأسلوب مهني وعالمي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-500">
                  سجّل الآن
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all">
                  عرض تفاصيل الدورة
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-slate-800/50 mt-8">
                 <div className="flex flex-col items-center lg:items-start">
                   <span className="text-2xl font-bold text-white">18+</span>
                   <span className="text-slate-500 text-xs font-bold uppercase">ساعة تدريبية</span>
                 </div>
                 <div className="w-px h-8 bg-slate-800"></div>
                 <div className="flex flex-col items-center lg:items-start">
                   <span className="text-2xl font-bold text-white">100%</span>
                   <span className="text-slate-500 text-xs font-bold uppercase">منهج احترافي</span>
                 </div>
              </div>
            </div>
            
            {/* Visual: CSS-based Terminal Window */}
            <div className="hidden lg:block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0f172a] rounded-xl border border-slate-700 shadow-2xl overflow-hidden font-mono text-sm leading-6">
                {/* Terminal Header */}
                <div className="bg-slate-800/80 p-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-slate-400 text-xs">student@cyber-masters:~</div>
                </div>
                {/* Terminal Body */}
                <div className="p-6 space-y-2 text-slate-300 h-[320px] overflow-hidden dir-ltr text-left">
                  <div className="flex gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-slate-100">./mastery_protocol.sh</span>
                  </div>
                  <div className="text-slate-400 animate-pulse">Initializing Cyber Masters training v2.0...</div>
                  <div className="text-blue-400 mt-2">[INFO] Secure environment validated</div>
                  <div className="text-blue-400">[INFO] Educational modules synchronized</div>
                  <div className="text-blue-400">[INFO] Lab connectivity: 100%</div>
                  <br/>
                  <div className="text-green-500 font-bold">READY FOR DEPLOYMENT</div>
                  <div className="text-slate-400 mt-2">Targeting skill excellence...</div>
                  <div className="w-full bg-slate-800 rounded-full h-1 mt-2 mb-4">
                    <div className="bg-indigo-500 h-1 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~/academy</span>
                    <span className="text-slate-100">launch --interactive</span>
                  </div>
                  <div className="text-slate-100 mt-2">
                    System ready. <span className="bg-indigo-500/20 text-indigo-300 px-2 rounded">Welcome Master</span>
                  </div>
                  <div className="animate-bounce mt-2 text-indigo-400 font-bold">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section id="overview" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-indigo-600 font-black text-sm tracking-widest uppercase">لماذا تختارنا؟</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900">نحن لا ندرّس فقط، بل نصنع خبراء</p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              في أكاديمية Cyber Masters، نركز على بناء المهارات العملية والعقلية التحليلية التي يحتاجها المحترف الحقيقي في الميدان.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "أساسيات صلبة", desc: "بناء قاعدة معرفية قوية تبدأ من الصفر المطلق وتصل بك لمستويات متقدمة." },
              { title: "تحليل معمق للويب", desc: "فهم كيف تعمل الأنظمة من الداخل للكشف عن نقاط الضعف وحمايتها." },
              { title: "التفكير الاستباقي", desc: "تعلم كيف تتوقع التهديدات قبل حدوثها وتضع خطط الدفاع المناسبة." },
              { title: "توجيه مهني", desc: "نحن معك ليس فقط أثناء الدورة، بل نرشدك لبناء مسارك الوظيفي المستقبلي." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
                <div className="w-14 h-14 bg-white border border-slate-200 shadow-sm rounded-2xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                  <span className="text-xl font-bold font-mono">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Grid */}
      <section id="modules" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">المنهج الدراسي المتخصص</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              وحدات تعليمية متدرجة تضمن لك استيعاب كل مفهوم أمني بدقة واحترافية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-300 transition-all group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    {module.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">{module.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Platform Section */}
      <section id="labs" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden shadow-2xl">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                   مختبرات <span className="text-indigo-400">Masters</span> التعليمية
                 </h2>
                 <p className="text-lg text-slate-400 leading-relaxed font-medium">
                   نظام تعليمي متكامل يوفر لك مختبرات سحابية معزولة لاختبار المهارات العملية بضغطة زر واحدة، دون أي مخاطر.
                 </p>
                 <ul className="space-y-4">
                   {[
                     "وصول مباشر للمختبرات عبر المتصفح",
                     "تحديات متدرجة الصعوبة (Capture The Flag)",
                     "بيئة محاكاة واقعية لأنظمة الويب",
                     "تغطية كاملة لأحدث تقنيات الحماية"
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-slate-300">
                       <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                         </svg>
                       </div>
                       <span className="font-medium text-sm md:text-base">{item}</span>
                     </li>
                   ))}
                 </ul>
                 <button className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-indigo-900/50">
                   استكشف نظام المختبرات
                 </button>
               </div>

               {/* Visual: CSS-based Network Topology Schematic */}
               <div className="relative h-[400px] bg-slate-900 rounded-2xl border border-slate-800 p-8 flex items-center justify-center">
                 {/* Decorative Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                 
                 <div className="relative w-full max-w-md aspect-square flex flex-col justify-between items-center z-10">
                    
                    {/* Top Node: The Cloud/Server */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-slate-700 shadow-xl relative">
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                       </div>
                       <span className="text-xs text-slate-500 font-bold font-mono">Masters Server Cluster</span>
                    </div>

                    {/* Connecting Lines */}
                    <div className="flex-1 w-px bg-gradient-to-b from-slate-700 via-indigo-500 to-slate-700 my-2 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-950 px-3 py-1 border border-indigo-500/30 rounded-full text-[10px] text-indigo-400 whitespace-nowrap font-bold uppercase tracking-wider">
                        Secure Data Stream
                      </div>
                    </div>

                    {/* Middle Node: Master Key Icon */}
                    <div className="w-24 h-24 rounded-full border border-dashed border-indigo-500/20 flex items-center justify-center relative animate-[spin_15s_linear_infinite]">
                       <div className="absolute inset-2 rounded-full border border-dashed border-indigo-400/10 rotate-45"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-4 rounded-xl border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                       <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                       </svg>
                    </div>

                    {/* Bottom Node: User/Student */}
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border-2 border-slate-700 shadow-xl">
                          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                       </div>
                       <span className="text-xs text-slate-500 font-bold font-mono">Expert Station</span>
                    </div>

                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">لمن هذه الدورة؟</h2>
            <p className="text-lg text-slate-600 font-medium">إذا كنت تطمح للتميز والاحتراف، فقد وصلت لوجهتك الصحيحة.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: "🎓", title: "الطلاب والخريجون", desc: "لتحويل المعرفة النظرية إلى خبرة عملية مطلوبة بقوة في كبرى الشركات." },
               { icon: "🛡️", title: "المتخصصون في IT", desc: "لتعزيز مهاراتهم الحالية ببعد أمني احترافي يعزز من قيمتهم السوقية." },
               { icon: "🚀", title: "الطامحون للتغيير", desc: "لبناء مسار مهني جديد ومثمر في أحد أكثر التخصصات نمواً في العالم." }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-10 rounded-2xl text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-200 group">
                 <div className="text-5xl mb-6 bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-indigo-50 transition-colors">{item.icon}</div>
                 <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                 <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">ابدأ رحلتك لتصبح Master <br/> في الأمن السيبراني</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
            انضم الآن إلى أكاديمية Cyber Masters وابدأ التعلم بأسلوب المحترفين.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-xl shadow-blue-900/30 border border-blue-500">
               سجّل الآن في الأكاديمية
             </button>
             <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all">
               تحدث مع خبير تعليمي
             </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-white leading-none">Cyber Masters</span>
                  <span className="text-[10px] text-blue-500 font-bold tracking-widest uppercase">Expert Academy</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 max-w-xs text-center md:text-right font-medium">
                المرجع الأول لتمكين المبتدئين وتحويلهم إلى خبراء في الأمن السيبراني وحماية تطبيقات الويب.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold">
              <a href="#" className="hover:text-white transition-colors">الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">الشروط</a>
              <a href="#" className="hover:text-white transition-colors">من نحن</a>
              <a href="#" className="hover:text-white transition-colors">الدعم</a>
            </div>

            <div className="text-sm text-slate-600 text-center md:text-left font-bold">
              &copy; {new Date().getFullYear()} جميع الحقوق محفوظة. <br/>
              <span className="text-slate-500">أكاديمية Cyber Masters للتعليم التقني</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <CourseAssistant />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;