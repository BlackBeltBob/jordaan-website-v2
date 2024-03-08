import React, {memo} from "react";


const cellStyle = {
  minWidth: '30px',
  minHeight: '30px',
  border: 'solid 2px black',
  borderRadius: '3px',
  flex: 0,
  textAlign: 'center',
  verticalAlign: 'middle',
  backgroundColor: '#ff9',
}

const cellStyleRed = {
  ...cellStyle,
  border: 'solid 2px darkred',
  color: 'darkred',
}
const cellStyleGreen = {
  ...cellStyle,
  border: 'solid 2px darkgreen',
  color: 'darkgreen',
}
const cellStyleBlue = {
  ...cellStyle,
  border: 'solid 2px darkBlue',
  color: 'darkblue',
}
const containerT008Style = {
  flex: 0,
  display: 'flex',
  flexDirection: 'row',
  gap: '2px'
}
const containerT001Style = {
  flex: 0,
  display: 'flex',
  flexDirection: 'row',
  gap: '2px',
}

const cellContainerStyle = {
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  justifyContent: 'center',
}

const explainer1 = [
  {containerStyle: containerT008Style, showLabel: false, cells: [
    {style: cellStyleRed, content: '1'},
    {style: cellStyleRed, content: '2'},
    {style: cellStyleRed, content: '3'},
    {style: cellStyleRed, content: '4'},
    {style: cellStyleRed, content: '5'},
    {style: cellStyleRed, content: '6'},
    {style: cellStyleRed, content: '7'},
    {style: cellStyleRed, content: '8'},
    {style: cellStyleRed, content: '9'},
    {style: cellStyleRed, content: '10'},
    {style: cellStyleRed, content: '11'},
    {style: cellStyleRed, content: '12'},
    {style: cellStyleRed, content: '13'},
    {style: cellStyleRed, content: '14'},
    {style: cellStyleRed, content: '15'},
    {style: cellStyleRed, content: '16'},
    {style: cellStyleRed, content: '17'},
    {style: cellStyleRed, content: '18'},
    {style: cellStyleRed, content: '19'},
    {style: cellStyleRed, content: '20'},
  ]},
  {containerStyle: containerT001Style, showLabel: false, cells: [
    {style: cellStyleGreen, content: '21'},
    {style: cellStyleGreen, content: '22'},
    {style: cellStyleGreen, content: '23'},
    {style: cellStyleGreen, content: '24'},
    {style: cellStyleGreen, content: '25'},
  ]}
];

const explainer2 = [
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '1'},
      {style: cellStyleGreen, content: '2'},
      {style: cellStyleGreen, content: '3'},
      {style: cellStyleGreen, content: '4'},
      {style: cellStyleGreen, content: '5'},
      {style: cellStyleGreen, content: '6'},
    ]},
  {containerStyle: containerT008Style, showLabel: true, cells: [
      {style: cellStyleRed, content: '7'},
      {style: cellStyleRed, content: '8'},
      {style: cellStyleRed, content: '9'},
      {style: cellStyleRed, content: '10'},
      {style: cellStyleRed, content: '11'},
      {style: cellStyleRed, content: '12'},
      {style: cellStyleRed, content: '13'},
      {style: cellStyleRed, content: '14'},
      {style: cellStyleRed, content: '15'},
      {style: cellStyleRed, content: '16'},
      {style: cellStyleRed, content: '17'},
      {style: cellStyleRed, content: '18'},
      {style: cellStyleRed, content: '19'},
      {style: cellStyleRed, content: '20'},
    ]},
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '21'},
      {style: cellStyleGreen, content: '22'},
      {style: cellStyleGreen, content: '23'},
      {style: cellStyleGreen, content: '24'},
      {style: cellStyleGreen, content: '25'},
    ]}
];


const explainer3 = [
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleBlue, content: '1'},
      {style: cellStyleBlue, content: '2'},
      {style: cellStyleBlue, content: '3'},
      {style: cellStyleBlue, content: '4'},
      {style: cellStyleBlue, content: '5'},
    ]},
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '6'},
    ]},
  {containerStyle: containerT008Style, showLabel: true, cells: [
      {style: cellStyleRed, content: '7'},
      {style: cellStyleRed, content: '8'},
      {style: cellStyleRed, content: '9'},
      {style: cellStyleRed, content: '10'},
      {style: cellStyleRed, content: '11'},
      {style: cellStyleRed, content: '12'},
      {style: cellStyleRed, content: '13'},
      {style: cellStyleRed, content: '14'},
      {style: cellStyleRed, content: '15'},
      {style: cellStyleRed, content: '16'},
      {style: cellStyleRed, content: '17'},
      {style: cellStyleRed, content: '18'},
      {style: cellStyleRed, content: '19'},
      {style: cellStyleRed, content: '20'},
    ]},
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '21'},
      {style: cellStyleGreen, content: '22'},
      {style: cellStyleGreen, content: '23'},
      {style: cellStyleGreen, content: '24'},
      {style: cellStyleGreen, content: '25'},
    ]}
];

const explainer4 = [
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '1'},
      {style: cellStyleGreen, content: '2'},
      {style: cellStyleGreen, content: '3'},
      {style: cellStyleGreen, content: '4'},
      {style: cellStyleGreen, content: '5'},
      {style: cellStyleGreen, content: '6'},
    ]},
  {containerStyle: containerT008Style, showLabel: true, cells: [
      {style: cellStyleRed, content: '7'},
      {style: cellStyleRed, content: '8'},
      {style: cellStyleRed, content: '9'},
      {style: cellStyleRed, content: '10'},
  ]},
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '11'},
      {style: cellStyleGreen, content: '12'},
      {style: cellStyleGreen, content: '13'},
      {style: cellStyleGreen, content: '14'},
      {style: cellStyleGreen, content: '15'},
      {style: cellStyleGreen, content: '16'},
    ]},
  {containerStyle: containerT008Style, showLabel: true, cells: [
      {style: cellStyleRed, content: '17'},
      {style: cellStyleRed, content: '18'},
      {style: cellStyleRed, content: '19'},
      {style: cellStyleRed, content: '20'},
    ]},
  {containerStyle: containerT001Style, showLabel: true, cells: [
      {style: cellStyleGreen, content: '21'},
      {style: cellStyleGreen, content: '22'},
      {style: cellStyleGreen, content: '23'},
      {style: cellStyleGreen, content: '24'},
      {style: cellStyleGreen, content: '25'},
    ]}
];
const ChronicTreatmentsExplainer = memo((props) => {
  const treatmentGroups = (props.version === 'explainer1')
    ? explainer1
    : (props.version === 'explainer2')
      ? explainer2
      : (props.version === 'explainer3')
        ? explainer3
        : explainer4;

  return (
    <div className='pb-10'>
      <div style={cellContainerStyle}>
        {treatmentGroups.map(group => {
          return (<div style={group.containerStyle}>
            {group.cells.map(cell => {
              return <ChronicTreatmentsExplainerCell style={cell.style} content={cell.content} />
            })}
          </div>)
        })}
      </div>
      <p className='px-[160px] md:px-[100px] sm:px-[20px] text-justify text-gray-500'>
        {props.explainer}
      </p>

    </div>
  );

})

const ChronicTreatmentsExplainerCell = memo((props) => {

  return (
    <div style={props.style}>{props.content}</div>
  );

})


export default memo(ChronicTreatmentsExplainer)