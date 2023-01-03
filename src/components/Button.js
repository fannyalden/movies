import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {

    return (
        <button
            onClick={onClick}
            className="btn-load">
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Title'
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}


export default Button
