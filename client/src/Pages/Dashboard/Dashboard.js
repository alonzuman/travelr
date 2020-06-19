import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner';
import { logout, getMyJobs } from '../../actions';
import { Redirect } from 'react-router-dom';
import JobCard from './components/JobCard';
import Stats from './components/Stats';

export default function Home() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const myJobs = useSelector(state => state.jobs.myJobs);
  const { isLoading, user, isAuth } = auth;

  const fetchJobs = async () => await dispatch(getMyJobs());

  useEffect(() => {
    fetchJobs()
  }, [])

  if (!isLoading && isAuth) {
    return (
      <div>
        {isLoading && <Spinner />}
        <img src={user.avatar ? user.avatar : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgYBBAUHA//EADgQAAICAQIDBAYHCQEAAAAAAAABAgMEBREGEiExQVGhEzJhkbHBIlJiY3FygSQzNDZCkrLR8CP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APcQAAAAAjKSjFuTSS72a2oZtWHVvOW0n6sV1bKrl5VmVNysnOS7lKW+3yAs9urYNb2d6b+ym/gfG/XcSuKdXNa33RW23vKs2RbAsL4khv0xpbfnR1MLPx82LdEvpL1oS6SRSWyVN1lFsbaZOM4vdMC/A4lfEmLyx9JXansubZLZP3nUxMujMq9Jj2Kcd9n7GB9wAAAAAAAD532KmmdkluoRbex9DV1N7afkv7t/ACpZWRZlXSttf0peS8D4thsiAMNhsi2AbMNhsi2AbO5wnbNZN1fbCUd317Gux7e/yOCbmjTlDVcVxezdiT/BgXsBdgAAAAAABq6mt9PyV93L4G0fLKjz49sfrQa8gKLuYZjcwwDMMMi2AbIgwwDNzRVzatir7zfyNFnS4cSlrNH2eZ+TKLuuwyAQAAAAAAr3FV0k6KU2otOTXj4fMsJXeLKpfs9y9XrB+zvXzAr7ZhsbkWwDZEGGwDIthsw2UGyLfkGyLYHoGhXzyNJx7LJOU+XZt9+z2+RvmhoVEsfScauxbS5OZrw36/M3yAAAAAAHyysevKonTct4SXU+oAp+r6O9PpVyudkHPl9XbY5BftRxlmYdtD/qXR+D7vMoVkJVzlCyPLKLaa8GBFsi2GYZQbIthsiwDZa9M4Zrrsrvy7fSbJS9Fy7JP2+JxeH8F52o1preqp89n6di/Vl+IAAAAAAAAAAAFY4swq4KvMh0nOXJNePTt8izld4tyKZ4ldULYSsVqbgpbtLZgVbci2GyLZQZFvZGSMuxhHoWiYNeDgwjX1lNKc5Ptk2dA1NOyaL8apU3V2NQW6jJPbobe5FAAAAAA18nNxsX9/fCt+DfX3Gtrmc8HBc62vSzfLD2PxKTZKU5Oc5OUpPdtvfcC2ZHEuHX0phZa/FLlXn/AKOXk8TZlm6prrpX9z/79DiMwyjYyc7Kyd/T5Fk0+2Ll093Yand0MtkWAZgEWEGzDYZFsBvs009mux+BvY2uali9K8ucorus+mvM57ZFgWjF4ytj0y8WM19auWz9zOvi8UaXfspXSpk+62O3muh5+YYV6vTdVfWrKbIWQfZKMt0fQ8u0vUrtLyo30ybjv/6Q36TR6dXZGyuM63vGSTT8UyCucYTe+LDu+k/gVtlh4w/iMb8kviV1gGRbDIsoMwDDAwzDDIsINkWGYYGGYBhgGRbDIsA2emcN2O3QsKTfVVKPu6fI8yZ6Twn/AC/ifhL/ACZB/9k='} />
        {user && <h1>Hi {user.firstName}</h1>}
        <button onClick={() => dispatch(logout())}>Logout</button>
        {myJobs &&
          <div>
            <Stats jobs={myJobs} />
            {myJobs.map(job => < JobCard job={job} key={job._id} />)}
          </div>
        }
      </div>
    )
  } else {
    return (
      <Redirect to='/' />
    )
  }
}
