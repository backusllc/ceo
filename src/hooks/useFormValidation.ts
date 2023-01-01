import { useState, useEffect, useCallback } from "react"

export const useFormValidation = (stateSchema: any, validationSchema: any, callback: any) => {
    const [state, setState] = useState(stateSchema)
    const [disable, setDisable] = useState(true)

    const validateState = useCallback(() => {
        const hasError = Object.keys(validationSchema).some(key => {
            const isInputRequired = validationSchema[key].required
            const stateValue = state[key].value
            const stateError = state[key].error

            return isInputRequired && (!stateValue || stateError)
        })
        return hasError
    }, [state, validationSchema])

    useEffect(() => {
        setDisable(validateState())
    }, [validateState])

    const handleChange = ({ target }: any) => {
        const { name, value } = target

        const field = validationSchema[name]
        let error = ""

        if (field.required) {
            if (!value) {
                error = "項目を入力してください"
            } else {
                if (field.validator.regEx) {
                    if (!field.validator.regEx.test(value)) {
                        error = field.validator.error
                    }
                } else if (field.validator.length) {
                    if (field.validator.length > value.length) {
                        error = field.validator.error
                    }
                }
            }
        }

        setState(prevState => ({
            ...prevState,
            [name]: { value, error }
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()

        if (!validateState()) {
            callback()
        }
    }

    return { state, disable, handleChange, handleSubmit }
}
