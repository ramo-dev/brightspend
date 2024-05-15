import { Card, Flex, Typography } from 'antd'
import React from 'react';
import "./StatisticsStyles.css"

const Statistics = () => {
  return (
   <div className='statistics'>
     <Card>
            <Typography.Title level={2}>Statitics</Typography.Title>
            <Card>
              <Flex>
                <div className="box"></div>
              </Flex>
            </Card>
          </Card>
   </div>
  )
}

export default Statistics