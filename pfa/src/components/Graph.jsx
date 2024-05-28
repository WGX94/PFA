// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
      "id": "japan",
      "color": "hsl(74, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 9
        },
        {
          "x": "helicopter",
          "y": 66
        },
        {
          "x": "boat",
          "y": 267
        },
        {
          "x": "train",
          "y": 131
        },
        {
          "x": "subway",
          "y": 206
        },
        {
          "x": "bus",
          "y": 74
        },
        {
          "x": "car",
          "y": 135
        },
        {
          "x": "moto",
          "y": 256
        },
        {
          "x": "bicycle",
          "y": 19
        },
        {
          "x": "horse",
          "y": 113
        },
        {
          "x": "skateboard",
          "y": 272
        },
        {
          "x": "others",
          "y": 293
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(302, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 26
        },
        {
          "x": "helicopter",
          "y": 161
        },
        {
          "x": "boat",
          "y": 126
        },
        {
          "x": "train",
          "y": 94
        },
        {
          "x": "subway",
          "y": 208
        },
        {
          "x": "bus",
          "y": 249
        },
        {
          "x": "car",
          "y": 291
        },
        {
          "x": "moto",
          "y": 149
        },
        {
          "x": "bicycle",
          "y": 197
        },
        {
          "x": "horse",
          "y": 37
        },
        {
          "x": "skateboard",
          "y": 170
        },
        {
          "x": "others",
          "y": 238
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(256, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 40
        },
        {
          "x": "helicopter",
          "y": 67
        },
        {
          "x": "boat",
          "y": 177
        },
        {
          "x": "train",
          "y": 84
        },
        {
          "x": "subway",
          "y": 146
        },
        {
          "x": "bus",
          "y": 204
        },
        {
          "x": "car",
          "y": 200
        },
        {
          "x": "moto",
          "y": 124
        },
        {
          "x": "bicycle",
          "y": 193
        },
        {
          "x": "horse",
          "y": 159
        },
        {
          "x": "skateboard",
          "y": 255
        },
        {
          "x": "others",
          "y": 63
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(228, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 134
        },
        {
          "x": "helicopter",
          "y": 288
        },
        {
          "x": "boat",
          "y": 112
        },
        {
          "x": "train",
          "y": 70
        },
        {
          "x": "subway",
          "y": 202
        },
        {
          "x": "bus",
          "y": 201
        },
        {
          "x": "car",
          "y": 2
        },
        {
          "x": "moto",
          "y": 242
        },
        {
          "x": "bicycle",
          "y": 83
        },
        {
          "x": "horse",
          "y": 79
        },
        {
          "x": "skateboard",
          "y": 180
        },
        {
          "x": "others",
          "y": 174
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(258, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 227
        },
        {
          "x": "helicopter",
          "y": 11
        },
        {
          "x": "boat",
          "y": 201
        },
        {
          "x": "train",
          "y": 243
        },
        {
          "x": "subway",
          "y": 28
        },
        {
          "x": "bus",
          "y": 157
        },
        {
          "x": "car",
          "y": 292
        },
        {
          "x": "moto",
          "y": 230
        },
        {
          "x": "bicycle",
          "y": 135
        },
        {
          "x": "horse",
          "y": 166
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 136
        }
      ]
    }
  ]

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
              "x": "plane",
              "y": 9
            },
            {
              "x": "helicopter",
              "y": 66
            },
            {
              "x": "boat",
              "y": 267
            },
            {
              "x": "train",
              "y": 131
            },
            {
              "x": "subway",
              "y": 206
            },
            {
              "x": "bus",
              "y": 74
            },
            {
              "x": "car",
              "y": 135
            },
            {
              "x": "moto",
              "y": 256
            },
            {
              "x": "bicycle",
              "y": 19
            },
            {
              "x": "horse",
              "y": 113
            },
            {
              "x": "skateboard",
              "y": 272
            },
            {
              "x": "others",
              "y": 293
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(302, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 26
            },
            {
              "x": "helicopter",
              "y": 161
            },
            {
              "x": "boat",
              "y": 126
            },
            {
              "x": "train",
              "y": 94
            },
            {
              "x": "subway",
              "y": 208
            },
            {
              "x": "bus",
              "y": 249
            },
            {
              "x": "car",
              "y": 291
            },
            {
              "x": "moto",
              "y": 149
            },
            {
              "x": "bicycle",
              "y": 197
            },
            {
              "x": "horse",
              "y": 37
            },
            {
              "x": "skateboard",
              "y": 170
            },
            {
              "x": "others",
              "y": 238
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(256, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 40
            },
            {
              "x": "helicopter",
              "y": 67
            },
            {
              "x": "boat",
              "y": 177
            },
            {
              "x": "train",
              "y": 84
            },
            {
              "x": "subway",
              "y": 146
            },
            {
              "x": "bus",
              "y": 204
            },
            {
              "x": "car",
              "y": 200
            },
            {
              "x": "moto",
              "y": 124
            },
            {
              "x": "bicycle",
              "y": 193
            },
            {
              "x": "horse",
              "y": 159
            },
            {
              "x": "skateboard",
              "y": 255
            },
            {
              "x": "others",
              "y": 63
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(228, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 134
            },
            {
              "x": "helicopter",
              "y": 288
            },
            {
              "x": "boat",
              "y": 112
            },
            {
              "x": "train",
              "y": 70
            },
            {
              "x": "subway",
              "y": 202
            },
            {
              "x": "bus",
              "y": 201
            },
            {
              "x": "car",
              "y": 2
            },
            {
              "x": "moto",
              "y": 242
            },
            {
              "x": "bicycle",
              "y": 83
            },
            {
              "x": "horse",
              "y": 79
            },
            {
              "x": "skateboard",
              "y": 180
            },
            {
              "x": "others",
              "y": 174
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(258, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 227
            },
            {
              "x": "helicopter",
              "y": 11
            },
            {
              "x": "boat",
              "y": 201
            },
            {
              "x": "train",
              "y": 243
            },
            {
              "x": "subway",
              "y": 28
            },
            {
              "x": "bus",
              "y": 157
            },
            {
              "x": "car",
              "y": 292
            },
            {
              "x": "moto",
              "y": 230
            },
            {
              "x": "bicycle",
              "y": 135
            },
            {
              "x": "horse",
              "y": 166
            },
            {
              "x": "skateboard",
              "y": 254
            },
            {
              "x": "others",
              "y": 136
            }
          ]
        }
      ]
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    return (

    
    <ResponsiveLine 
        data={data}
        style={{heigt: '200px'}}
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
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
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
    />
)
}

export default MyResponsiveLine