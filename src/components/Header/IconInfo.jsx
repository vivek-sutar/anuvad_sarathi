
import './IconInfo.css'

const IconInfo = ({ Icon, text }) => {
    return (
        <div className="d-flex align-items-center">
            <div className="header-icon d-flex justify-content-center align-items-center">
                {Icon}
            </div>
            <div className="m-0 ms-2 header-icon-text">{text}</div>
        </div>
    )
}

export default IconInfo