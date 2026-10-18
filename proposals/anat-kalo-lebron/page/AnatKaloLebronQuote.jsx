import React from "react";
import "@/styles/paper.css";

const RATE = 380;

const ITEMS = [
  {
    title: "מערכת ניהול",
    text: "מנהלת את המשתתפות, הנוכחות, המשימות של תותי והמספרים: כמה פעילות, כמה בסיכון, כמה הצטרפו וכמה עזבו.",
    hours: 12,
  },
  {
    title: "מספר וואטסאפ נפרד",
    text: "רכישת מספר חדש וחיבור שלו למערכת. כל ההודעות האוטומטיות יוצאות ממנו ולא מהטלפון שלך.",
    hours: 2,
  },
  {
    title: "זום ונוכחות",
    text: "קישור חדש כל בוקר שנשלח לקבוצה לבד, מעקב מי הגיעה, רשימה יומית אלייך והודעות למי שלא הגיעה.",
    hours: 6,
  },
  {
    title: "הצטרפות",
    text: "עמוד הצטרפות שמוביל לעמוד התשלום בגרואו. אחרי התשלום יוצאים לבד שאלון היכרות והודעת ברוכה הבאה. תשלום שנכשל מופיע כהתראה במערכת.",
    hours: 4,
  },
  {
    title: "מענה אוטומטי באינסטגרם",
    text: "כל פנייה או תגובה לפוסט מקבלת הודעה פרטית עם הקישור.",
    hours: 1.5,
  },
  {
    title: "ירח דבש",
    text: "שלושה סרטוני הכנה עד יום ראשון, והודעות מתוזמנות לאורך השבועיים הראשונים.",
    hours: 3,
  },
  {
    title: "חברה מביאה חברה",
    text: "שובר מתנה שמשתתפת שולחת לחברה, עם 70% הנחה על החודש הראשון.",
    hours: 1.5,
  },
  {
    title: "מי שעוזבת",
    text: "הודעה אישית אוטומטית ממך, והעברה לקבוצה חינמית.",
    hours: 1,
  },
  {
    title: "סרטונים קצרים מהמפגשים",
    text: "ההקלטות הופכות לסרטונים קצרים עם כתוביות, כותרת ותיאור. את מאשרת, והם עולים לבד לפי לוח זמנים.",
    hours: 12,
  },
];

const EXPENSES = [
  { title: "בייס 44", text: "מנוי בסיסי שמחזיק את המערכת", cost: "בערך 20 עד 40 דולר" },
  { title: "שרת לעריכת הסרטונים", text: "", cost: "בערך 5 עד 15 דולר" },
  { title: "קלוד", text: "בחירת הרגעים, כותרות ותיאורים", cost: "בערך 20 עד 30 דולר" },
  { title: "מאניצ'אט", text: "מענה אוטומטי באינסטגרם", cost: "בערך 15 דולר" },
  { title: "מספר וואטסאפ", text: "מספר חדש וחיבור דרך גרין", cost: "לפי המסלול" },
  { title: "תמלול והעלאה לרשתות", text: "", cost: "לפי המסלול" },
];

const ils = (n) => n.toLocaleString("he-IL", { maximumFractionDigits: 0 }) + " ₪";
const hrs = (n) => (Number.isInteger(n) ? n : n.toFixed(1)) + " שעות";

export default function AnatKaloLebronQuote() {
  React.useEffect(() => {
    document.title = "הצעת מחיר | ענת קלו לברון";
  }, []);

  const totalHours = ITEMS.reduce((s, i) => s + i.hours, 0);
  const total = totalHours * RATE;
  const discount = total * 0.25;
  const final = total - discount;

  return (
    <main className="paper" dir="rtl" lang="he">
      <header className="paper-header">
        <div className="paper-eyebrow">הצעת מחיר</div>
        <h1>ענת קלו לברון</h1>
      </header>

      <section className="paper-section">
        <h2>מה בונים</h2>
        <div className="quote-items">
          {ITEMS.map((item, i) => (
            <div className="quote-item" key={i}>
              <div className="quote-item-head">
                <strong>{item.title}</strong>
                <span className="quote-hours">{hrs(item.hours)}</span>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <h2>המערכת לומדת</h2>
        <p>לכל סרטון המערכת כותבת כותרת ותיאור.</p>
        <ul className="paper-list">
          <li>את מאשרת כל אחד מהם בנפרד.</li>
          <li>כשאת לא מאשרת, את כותבת למה. הסיבה נשמרת, והמערכת לוקחת אותה בחשבון בפעם הבאה.</li>
          <li>דחיית כותרת או תיאור לא דוחה את הסרטון. את יכולה לכתוב בעצמך ולתזמן.</li>
        </ul>
      </section>

      <section className="paper-section">
        <h2>מחיר</h2>
        <div className="quote-summary">
          <div><span>סך הכל שעות</span><span>{hrs(totalHours)}</span></div>
          <div><span>תעריף לשעה</span><span>{ils(RATE)}</span></div>
          <div><span>מחיר הפרויקט</span><span>{ils(total)}</span></div>
          <div><span>הנחה 25%</span><span>{ils(-discount)}</span></div>
          <div className="quote-final"><span>מחיר סופי</span><span>{ils(final)}</span></div>
        </div>
        <p className="paper-eyebrow">המחירים לפני מע"מ.</p>
      </section>

      <section className="paper-section">
        <h2>הוצאות חודשיות נלוות</h2>
        <p>לא כלולות במחיר הפרויקט.</p>
        <div className="quote-items">
          {EXPENSES.map((e, i) => (
            <div className="quote-item" key={i}>
              <div className="quote-item-head">
                <strong>{e.title}</strong>
                <span className="quote-hours">{e.cost}</span>
              </div>
              {e.text && <p>{e.text}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="paper-section">
        <h2>הערות</h2>
        <ul className="paper-list">
          <li>אין הטמעה של סליקה. נבקש מהתמיכה של גרואו להפעיל התראות על תשלומים, והן יופיעו במערכת.</li>
          <li>האחות הגדולה והקבוצות הקטנות הן המלצה שלי אלייך, ואינן חלק מהבנייה.</li>
        </ul>
      </section>
    </main>
  );
}
