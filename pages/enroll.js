import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';

const Enroll = ({ courses }) => {
    return (
      <div className='pt-10 pb-20'>
      <div className="notes-container ml-20 pt-10">
        <h1 className='pb-5 font-bold text-slate-300'>List of Trainees</h1>
        <div className="grid wrapper">
          {courses.map(course => {
            return (
              <div key={course._id}>
                <Card>
                  <Card.Content>
                    <div className="grid grid-cols-3 gap-4 border-b-2 border-slate-400 pb-2 pr-4">
                      <div className="flex space-x-96 tex-slate-700">
                        <Card.Header>
                          <Link href={`/${course._id}`}>
                            <a>{course.firstName}</a>
                          </Link>
                        </Card.Header>
                        <div className='header'>
                          <h1 className='font-bold text-slate-700'>Training Code</h1>
                            <a className='uppercase text-center'>AZ 900</a>
                        </div>
                        <div className='mt-2 flex'>
                          <Card.Content extra>
                            <div>
                              <Link href={`/${course._id}`}>
                              <Button primary className='bg-cyan-800 hover:bg-cyan-500 rounded p-1 text-white hover:text-slate-200 pr-4'>View</Button>
                              </Link>
                            </div>
                            <div>
                            <Link href={`/${course._id}/edit`}>
                              <Button primary className='space-y-4 bg-cyan-800 hover:bg-cyan-500 rounded p-1 text-white hover:text-slate-200 pr-4'>Edit</Button>
                            </Link>
                            </div>
                          </Card.Content>
                        </div>                       
                      </div>
                    </div>
                    
                  </Card.Content>
                  
                  
                </Card>
                </div>
            )
          })}
        </div>
      </div>
      </div>
    )
  }
  
  Enroll.getInitialProps = async () => {
    const res = await fetch('https://trialcasestudy.azurewebsites.net/api/training');
    const { data } = await res.json();
  
    return { courses: data }
  }
  
  export default Enroll;