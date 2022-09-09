import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => (
    <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} mx-w-[470px] mt-5`}>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
            </p>
        </div>
        <div>
            <Button
                styles={`${styles.flexCenter} rounded-[10px] sm:ml-10 ml-0 sm:mt-0 mt-10`}
            />
        </div>
    </section>
);

export default CTA;
