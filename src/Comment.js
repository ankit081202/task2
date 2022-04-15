import React from 'react'
import './Comment.css'
export let weigt 
function Comment({ weight }) {
return (
    <div className=' main'>
        <div>
            <img className='imge' src='https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc='
            style={{
                width: '120px',
                borderRadius: "50%",
                border: `${weight}px solid rgb(36, 36, 165)`
            }}
            />
        </div>
        <div className='main1'>
            <div className='main2'>
                <div className='main3'>Rahul Gupta</div>
                <div>2 months ago</div>
            </div>
            <div >
                <strong>This is a great post</strong>
            </div>
        </div>
    </div>
)
    weigt=weight
}

export default Comment
