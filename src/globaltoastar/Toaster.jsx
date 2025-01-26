import toast, { Toaster } from 'react-hot-toast'
const toaster = (message, type) => {
    const setting = {
        duration: 3000,
        position: 'bottom-center',
        style: {
            background: '#e24585',
            color: '#fff'
        },
    }
    switch (type) {
        case "success":
            return toast.success(message, setting);
        case "failure":
            return toast.error(message, setting);
        case "error":
            return toast.error(message, setting);
    }

}

export default toaster