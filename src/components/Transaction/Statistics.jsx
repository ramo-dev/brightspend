import { Card, Empty, Flex, Typography } from 'antd'
import "./StatisticsStyles.css"

const Statistics = () => {
  return (
   <div className='statistics'>
     <Card>
            <Typography.Title level={2}>Statistics</Typography.Title>
            <Card>
              <Flex justify='center'>
              <Empty />
              </Flex>
            </Card>
          </Card>
   </div>
  )
}

export default Statistics