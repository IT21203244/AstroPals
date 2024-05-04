import { useState } from "react"
import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {

    const [isShowPassword, setIsShowPassword] = useState (false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

  return (
    <div className="flex item-center bg-transparent border-[1.5px] px-5 rounded mb-3">
        <input
            value={value}
            onChange={onChange}
            type={isShowPassword ? "text" : "password"}
            placeholder={placeholder || "Password"}
            className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none text-white" 
        />
        
        <div className="inset-y-0 right-0 flex items-center pr-3">
                {isShowPassword ? 
                    (
                        <FaRegEye
                            size={22}
                            className="text-primary cursor-pointer"
                            onClick={toggleShowPassword} 
                        />
                    ) : (
                        <FaRegEyeSlash
                            size={22}
                            className="text-slate-400 cursor-pointer"
                            onClick={toggleShowPassword}
                        />
                    )
                }
        </div>
    </div>
  )
}

PasswordInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default PasswordInput