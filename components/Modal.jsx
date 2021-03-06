import styles from '@/styles/Modal.module.css'
import {useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import {FaTimes} from 'react-icons/fa'
export default function  Modal({show, onClose, children, title}){
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => setIsBrowser(true))
    const handleClose = e => {
        e.preventDefault();
        document.body.style.overflow = "auto"
        onClose();
    }
    const content = show ? (
        <div className={`${styles.overlay}`}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick={handleClose}>
                        <FaTimes />
                    </a>
                </div>
                <div>
                    {title && <h1 className="text-black text-2xl">{title}</h1>}
                </div>

                <div className={styles.body}>{children}</div>
            </div>
        </div>
    ) : null
   if (isBrowser){
       return ReactDOM.createPortal(
           content,
           document.getElementById('modal-root')
       )
   }else {
       return null
   }
}
