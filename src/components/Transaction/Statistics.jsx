import { Card, Empty, Flex, Typography } from 'antd'
import "./StatisticsStyles.css"

const Statistics = () => {
  return (
   <div className='statistics'>
     <Card>
            <Typography.Title level={2}>Stats</Typography.Title>
            <Card>
              <Flex justify='center'>
              {/* <Empty /> */}
              this weeks Goal : 3000ksh
              </Flex>
            </Card>
          </Card>
   </div>
  )
}

export default Statistics