import Card from "./Card"

export default function InnerEduc(props) {   

    return (
        <div className="inner-info">
            <div className="inner-row">
                <div className="inner-logo-container">
                    <img src={props.schoolLogo} alt="BSU Logo" className="inner-logo" />
                </div>

                <div className="inner-text">
                    <span className="inner-course">
                        {props.course}
                    </span>
                    <span className="school-name">
                        {props.schoolName}
                    </span>
                </div>
            </div>

            <div className="year-container">
                <i className="bx bx-calendar"></i>
                <span className="inner-year">{props.year}</span>  
            </div>

        </div>
    )
}