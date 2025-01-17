import React from 'react'
import '../../Styles/Projects/Summary.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import { PieChart } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import HighestPriority from '../../SampleJson/HighestPriority.json';

const barData = [
  { label: 'highest', value: 1, icon: <ArrowUpwardIcon style={{ verticalAlign: 'middle' }} /> },
  { label: 'high', value: 2, icon: <ArrowForwardIcon style={{ verticalAlign: 'middle' }} /> },
  { label: 'medium', value: 9, icon: <ExpandLessIcon style={{ verticalAlign: 'middle' }} /> },
  { label: 'low', value: 6, icon: <ArrowBackIcon style={{ verticalAlign: 'middle' }} /> },
  { label: 'lowest', value: 1, icon: <ArrowDownwardIcon style={{ verticalAlign: 'middle' }} /> },
];

const Summary = () => {

  const data = [
    { id: 0, value: 400, label: 'Group A' },
    { id: 1, value: 300, label: 'Group B' },
    { id: 2, value: 300, label: 'Group C' },
    { id: 3, value: 200, label: 'Group D' },
  ];

  const labels = barData.map(item => item.label);
  const values = barData.map(item => item.value);

  return (
    <div className='project-summary-main'> 
        <div className='project-summary-main-u1'>
          <div className='summary-main-u1-greet'>Good Morning, Godreign Elgin</div>
          <div className='summary-main-u1-sub-greet'>Here's where you'll view a summary of Go to market sample's status, priorities, workload, and more.</div>
        </div>      
        <div className='project-summary-main-u2'>
          <div className='summary-main-u2-card'>
            <div className='summary-main-u2-card-left'>
              <DoneAllIcon/>
            </div>
            <div className='summary-main-u2-card-right'>
              <div className='summary-main-u2-card-right-u'>3 Done</div>
              <div className='summary-main-u2-card-right-l'>in the last 7 days </div>
            </div>
          </div>
          <div className='summary-main-u2-card'>
            <div className='summary-main-u2-card-left'>
              <EditIcon/>
            </div>
            <div className='summary-main-u2-card-right'>
              <div className='summary-main-u2-card-right-u'>22 Updated</div>
              <div className='summary-main-u2-card-right-l'>in the last 7 days </div>
            </div>
          </div>
          <div className='summary-main-u2-card'>
            <div className='summary-main-u2-card-left'>
              <AddIcon/>
            </div>
            <div className='summary-main-u2-card-right'>
              <div className='summary-main-u2-card-right-u'>22 Created</div>
              <div className='summary-main-u2-card-right-l'>in the last 7 days </div>
            </div>
          </div>
          <div className='summary-main-u2-card'>
            <div className='summary-main-u2-card-left'>
              <CalendarMonth/>
            </div>
            <div className='summary-main-u2-card-right'>
              <div className='summary-main-u2-card-right-u'>0 Due</div>
              <div className='summary-main-u2-card-right-l'>in the last 7 days </div>
            </div>          
          </div>
        </div>      
        <div className='project-summary-main-u3'>
          <div className='summary-main-u3-card'>
            <div className='summary-main-u3-card-u'>
              <div className='summary-main-u3-card-u-up'>
                Status overview
              </div>
              <div className='summary-main-u3-card-u-lo'>
                Get a snapshot of the status of your items.
              </div>
            </div>
            <div className='summary-main-u3-card-l'>
              <PieChart 
                series={[
                  {
                    data: data.map(item => ({ ...item })),
                    innerRadius: 130, // Inner radius of the pie chart
                    outerRadius: 200, // Outer radius of the pie chart
                    paddingAngle: 3, // Padding between slices
                    cornerRadius: 5, // Corner radius for slices
                    startAngle: -90, // Start angle of the first slice
                    endAngle: 180, // End angle of the last slice
                    cx: 150, // X-coordinate of the chart's center
                    cy: 250, // Y-coordinate of the chart's center
                  }
                ]}
                width={500} // Width of the chart
                height={500} // Height of the chart
              />
            </div>
          </div>
          <div className='summary-main-u3-card'>
            <div className='summary-main-u3-card-u'>
              <div className='summary-main-u3-card-u-up'>
                Priority breakdown
              </div>
              <div className='summary-main-u3-card-u-lo'>
                Get a holistic view of how work is being prioritized. 
              </div>
            </div>
            <div className='summary-main-u3-card-l'>
              <BarChart
                xAxis={[{ scaleType: 'band', data: labels }]}
                series={[{ data: values }]}
                width={500}
                height={300}
                tooltip={{
                  render: (params) => {
                    const { index } = params[0]; // Get the index of the hovered bar
                    const item = data[index]; // Find the corresponding item
                  
                    return (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {item.icon}
                        <span style={{ marginLeft: 5 }}>{item.label}: {item.value}</span>
                      </div>
                    );
                  },
                }}
              />
            </div>
          </div>
        </div>      
        <div className='project-summary-main-u4'>
          <div className='summary-main-u3-card'>
            <div className='summary-main-u3-card-u'>
              <div className='summary-main-u3-card-u-up'>
                Highest priority
              </div>
              <div className='summary-main-u3-card-u-lo'>
                Get a holistic view of how work is being prioritized. 
              </div>
            </div>
            <div className='summary-main-u4-card-l'>
              {HighestPriority.map((item) => (
                <div className='summary-main-u3-card-l-list-card'>
                  <div className='summary-u3-card-l-list-card-left'>
                    <div className='summary-u3-card-l-list-card-left-u'>
                      {item.taskName} {item.priority}
                    </div>
                    <div className='summary-u3-card-l-list-card-left-l'>
                      {item.taskDesc}
                    </div>
                  </div>
                  <div className='summary-u3-card-l-list-card-right'>
                    <div className='summary-u3-card-l-list-card-right-u'>{item.status}</div>
                    <div className='summary-u3-card-l-list-card-right-l'>{item.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>    
          </div>
          <div className='summary-main-u3-card'>
            <div className='summary-main-u3-card-u'>
              <div className='summary-main-u3-card-u-up'>
                Pinned tasks
              </div>
              <div className='summary-main-u3-card-u-lo'>
                Get a holistic view of how work is being prioritized. 
              </div>
            </div>
            <div className='summary-main-u4-card-l'>
              {HighestPriority.map((item) => (
                <div className='summary-main-u3-card-l-list-card'>
                  <div className='summary-u3-card-l-list-card-left'>
                    <div className='summary-u3-card-l-list-card-left-u'>
                      {item.taskName} {item.priority}
                    </div>
                    <div className='summary-u3-card-l-list-card-left-l'>
                      {item.taskDesc}
                    </div>
                  </div>
                  <div className='summary-u3-card-l-list-card-right'>
                    <div className='summary-u3-card-l-list-card-right-u'>{item.status}</div>
                    <div className='summary-u3-card-l-list-card-right-l'>{item.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>      
    </div>
  )
}

export default Summary
