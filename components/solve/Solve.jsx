import React from 'react'
import { TfiPanel, TfiCommentsSmiley } from 'react-icons/tfi'
import { MdDevices, MdSupportAgent } from 'react-icons/md'
import { AiOutlineCloudSync } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { IoRocketOutline, IoSpeedometerOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

const Solve = () => {
    const { t } = useTranslation('common')
    return (
        <div className='solveList'>
            <div className='indexTitle'>
                <h1>{t('solve_title')}</h1>
                <p>{t('solve_desc')}  </p>
            </div>

            <div className="itemList">
                <div className="item">
                    <IoRocketOutline />
                    <h2>{t('solve_t1')}</h2>
                    <p>{t('solve_d1')}</p>
                </div>
                <div className="item">
                    <MdDevices />
                    <h2>{t('solve_t2')}</h2>
                    <p>{t('solve_d2')}</p>
                </div>


                <div className="item">
                    <AiOutlineCloudSync />
                    <h2>{t('solve_t3')}</h2>
                    <p>{t('solve_d3')}</p>
                </div>
                <div className="item">
                    <FaRegMoneyBillAlt />
                    <h2>{t('solve_t4')}</h2>
                    <p>{t('solve_d4')}</p>
                </div>
                <div className="item">
                    <IoSpeedometerOutline />
                    <h2>{t('solve_t5')}</h2>
                    <p>{t('solve_d5')}</p>
                </div>
                <div className="item">
                    <TfiPanel />
                    <h2>{t('solve_t6')}</h2>
                    <p>{t('solve_d6')}</p>
                </div>
                <div className="item">
                    <TfiCommentsSmiley />
                    <h2>{t('solve_t7')}
                    </h2>
                    <p>{t('solve_d7')}</p>
                </div>
                <div className="item">
                    <MdSupportAgent />
                    <h2>{t('solve_t8')}</h2>
                    <p>{t('solve_d8')}</p>
                </div>
            </div>

        </div>
    )
}

export default Solve