import React, { useEffect, useState } from 'react'
import SubMenu from './SubMenu'
import { MdKeyboardArrowDown } from 'react-icons/md';
import CheckOutsideClick from '../CheckOutsideClick/CheckOutsideClick';
import { Link } from 'react-router-dom';

const MenuPreference = ({ data }) => {
    const [showSubMenu, setSubMenu] = useState(true)
    const [subMenuContent, setSubmenuContent] = useState(null)

    const handleSubmenu = () => {
        setSubMenu(false)
        setSubmenuContent(null)
    }
    const handleSubmenuContent = (content) => {
        setSubmenuContent(null)
        setTimeout(() => {
            setSubmenuContent(content)
            console.log(content);

        }, 200);


    }
    useEffect(() => {
        if (subMenuContent) {
            setSubMenu(true)
        } else {
            setSubMenu(false)

        }
    }, [subMenuContent])
    return (
        <div>
            <ul className='flex justify-center items-center gap-3 py-3 relative z-[9999]'>

                {
                    data?.length > 0 && data?.map((item, index) => {

                        if (item?.content) {
                            return <li key={item.id} onClick={() => handleSubmenuContent(item?.content)} className='px-3 hover:text-primary duration-700 transition-all cursor-pointer text-base flex items-center gap-1'><span>{item?.name}</span>{
                                item?.content && <span><MdKeyboardArrowDown /></span>
                            }        </li>
                        } else {
                            return <Link key={item.id} to={`${item?.path}`} onClick={() => handleSubmenuContent(item?.content)} className='px-3 hover:text-primary duration-700 transition-all cursor-pointer text-base flex items-center gap-1'><span>{item?.name}</span></Link>
                        }
                    }
                    )

                }

            </ul>
            <>
                <div
                    className="_container relative z-50"
                >
                    <CheckOutsideClick onClickOutside={handleSubmenu}>
                        {showSubMenu && <SubMenu items={subMenuContent} />}
                    </CheckOutsideClick>
                </div>
            </>

        </div>
    )
}

export default MenuPreference