import React from "react";

function Pricing() {
  return (
    <>
      <main className="pricing-wrap">
        <h1>Pricing Page</h1>

        <p className="intro">
          Bizning xizmatlarimiz sizning ehtiyojlaringizga moslashgan. Har bir
          tarif rejasi foydalanuvchilarga eng qulay shartlarni taqdim etadi.
        </p>

        <div className="pricing-cards">
          <div className="card">
            <h2>Basic</h2>
            <p className="price">$9<span>/oy</span></p>
            <ul>
              <li>Asosiy funksiyalar</li>
              <li>1 ta foydalanuvchi</li>
              <li>Email orqali qo‘llab-quvvatlash</li>
            </ul>
            <button>Tanlash</button>
          </div>

          <div className="card popular">
            <h2>Pro</h2>
            <p className="price">$29<span>/oy</span></p>
            <ul>
              <li>Premium funksiyalar</li>
              <li>5 ta foydalanuvchi</li>
              <li>24/7 qo‘llab-quvvatlash</li>
            </ul>
            <button>Tanlash</button>
          </div>

          <div className="card">
            <h2>Enterprise</h2>
            <p className="price">$99<span>/oy</span></p>
            <ul>
              <li>To‘liq imkoniyatlar</li>
              <li>Cheksiz foydalanuvchilar</li>
              <li>Shaxsiy menejer</li>
            </ul>
            <button>Tanlash</button>
          </div>
        </div>
      </main>

    </>
  )
}

export default Pricing;
