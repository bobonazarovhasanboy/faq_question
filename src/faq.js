import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import './faqStyle.css'
import { faqsJson } from './translate/uzFaqsJson'

function App() {
	const [expended, setExpended] = useState(false)

	const handleChange = index => {
		setExpended(expended === index ? false : index)
	}

	return (
		<div className=' faq container'>
			<div className='accordionContainer'>
				{faqsJson.map((faq, index) => (
					<Accordion
						key={index}
						expanded={expended === index}
						onChange={() => handleChange(index)}
						TransitionProps={{ timeout: 650 }}
						sx={{ 
							margin: '10px 0',
							boxShadow: 'none', 
							border: 'none',
							 }}
					>
						<AccordionSummary
							className='accordionSummary'
							expandIcon={
								<span
									className='icon'
									style={{
										transform:
											expended === index ? 'rotate(180deg)' : 'rotate(0deg)',
									}}
									>
									{expended === index ? <RemoveIcon /> : <AddIcon />}
								</span>
							}
						>
							<Typography sx={{ fontFamily: 'Times New Roman, serif' }}>
								<h3>{faq.question}</h3>
							</Typography>
						</AccordionSummary>
						<AccordionDetails className='accordionDetails'>
							<Typography sx={{ fontFamily: 'Times New Roman, serif' }}>
								{faq.answer}
							</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</div>
		</div>
	)
}

export default App
