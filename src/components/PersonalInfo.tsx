import { motion } from 'motion/react';
import profileImage from '../assets/images/dummyImage.jpg';
import { getMonthName } from '../util/getMonth'

interface PersonalInfoProps {
  name: string;
  city: string;
  country: string;
  birthdate: Date;
}

const PersonalInfo = ({ name, city, country, birthdate }: PersonalInfoProps) => {
  const birthYear = birthdate.getFullYear();
  const birthMonth = birthdate.getMonth();
  const birthDay = birthdate.getDate();

  const calculateAge = () => {
    const today = new Date();

    let age = today.getFullYear() - birthYear;

    if (
      today.getMonth() < birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() < birthDay)
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge();


  return (
    <motion.section
      className='flex flex-row gap-5 text-sm lg:flex-col lg:max-w-3xl'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={profileImage} alt="profile image" className='w-1/2 h-auto object-cover md:w-full' />
      <div className='flex flex-col gap-2 '>
        <h3 className='font-medium'>{name}</h3>
        <p className='text-secondary-400'>{city}, {country}</p>
        <p className='text-secondary-400'>Born in {getMonthName(birthMonth)} {birthYear} | {age} y/o</p>
      </div>

    </motion.section>
  )
}

export default PersonalInfo