import {useState} from "react";
import {API_URL} from "../config";
import styles from "../styles/Form.module.css"

export default function ImageUpload({evtId, imageUploaded, token}) {
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('files', image)
        formData.append('ref', 'events')
        formData.append('refId', evtId)
        formData.append('field', 'image')

        const res = await fetch(`${API_URL}/upload`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: 'POST',
            body: formData,
        })

        if (res.ok) {
            imageUploaded()
        }
    }


    const handleFileChange = e => {
        e.preventDefault();
        setImage(e.target.files[0])
    }

    return (
        <div className={styles.form}>
            <div>Upload Event</div>
            <form onSubmit={handleSubmit}>
                <div className={styles.file}>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                <input type="submit" value="Upload" className='btn'/>
            </form>
        </div>
    )
}