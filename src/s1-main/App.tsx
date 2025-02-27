import React from 'react'
import s from './App.module.css'
import HW3 from "../s2-homeworks/hw03/HW3";
import HW2 from "../s2-homeworks/hw02/HW2";
import HW1 from "../s2-homeworks/hw01/HW1";
import HW4 from "../s2-homeworks/hw04/HW4";
import HW5 from "../s2-homeworks/hw05/HW5";
import Junior from "../s2-homeworks/hw05/pages/Junior";

function App() {
    return (
        <div className={s.App}>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<div style={{height: 150}}></div>*/}

            {/*<HW3/>*/}
            {/*<HW4/>*/}

            {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
            <HW5/>
            {/*<Junior/>*/}
        </div>
    )
}

export default App
