// eslint-disable-next-line no-unused-vars
import React from 'react'
import Email from './Email'
import useGetAllEmails from '../hooks/useGetAllEmails'
import { useSelector } from 'react-redux';

const Emails = () => {
  useGetAllEmails();
  const{emails}=useSelector(store=>store.app);
  //console.log(emails)
  return (
<div>
      {emails && emails.map((email) => (
        <Email key={email._id} email={email} />
      ))}
    </div>
  )
}

export default Emails
