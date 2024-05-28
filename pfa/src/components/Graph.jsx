// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'



// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = () => {

    const data = [
      {
        "id": "japan",
        "color": "hsl(74, 70%, 50%)",
        "data": [
          {
            "x": "Mai",
            "y": 1200
          },
          {
            "x": "Juin",
            "y": 0
          },
          {
            "x": "Juil",
            "y": 0
          },
          {
            "x": "Août",
            "y": 0
          },
          {
            "x": "Oct",
            "y": 0
          },
          {
            "x": "Nov",
            "y": 0
          },
          {
            "x": "Dec",
            "y": 0
          },
          
          
        ]
      },
      ]
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (


    /*
    <ResponsiveLine 
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        colors={{ scheme: 'reds' }}
        lineWidth={3}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        
    />
)
}

*/

<ResponsiveLine
      data={data}
      margin={{ top: 40, right: 50, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      
      yFormat=" >-.2f"
      curve="monotoneX"
      theme={{"axis": {"ticks": {
        "line": {
            "stroke": "#BEAF87",
            "strokeWidth": 1
        },
        "text": {
            "fontSize": 10,
            "fill": "#ffffff",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    }}
}}
      axisTop={null}
      
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: 'middle',
        
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      
      enableGridX={false}
      enablePoints={false}
      lineWidth={5}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderColor={{ theme: 'background' }}
      pointLabelYOffset={-12}
      enableArea={false}
      areaOpacity={0.3}
      useMesh={true}
      legends={[]}
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0
      }}
    />
  )
}



export default MyResponsiveLine

/*
legends={[
  {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
          {
              on: 'hover',
              style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
              }
          }
      ]
  }
]}
*/