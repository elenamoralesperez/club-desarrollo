import styles from "./Button.module.css";

interface Props {
    text: string;
}

const button = (props: Props) => {
    return (
    <div className={styles.button}>
        {props.text}
    </div>
    )
}

export default button