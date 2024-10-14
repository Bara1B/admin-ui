import Button from "../Elements/Button"
import CheckBox from "../Elements/CheckBox"
import LabeledInput from "../Elements/LabeledInput"

const FormSignIn = () => {
  return (
    <div>
      <div className="mt-16">
                <form action="">
                  <div className="mb-6">
                    <LabeledInput/>
                  </div>
                  <div className="mb-6">
                    <LabeledInput/>
                  </div>
                  <div className="mb-3">
                    <CheckBox/>
                  </div>
                  <Button/>
                </form>
              </div>
    </div>
  )
}

export default FormSignIn
