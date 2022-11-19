
function Btn({ text, cname, icon }) {
    return (
        <button className={cname}>
            <span>
                {icon}
            </span>
            <h5>
                {text}
            </h5>

        </button>
    );
}

export default Btn;