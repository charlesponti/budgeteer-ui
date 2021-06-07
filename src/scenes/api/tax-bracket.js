const tax_brackets = [
  { tax_rate: 0.10, start: 0, end: 9875, type: 'single' },
  { tax_rate: 0.10, start: 0, end: 19750, type: 'married_joint' },
  { tax_rate: 0.10, start: 0, end: 9875, type: 'married_separate' },
  { tax_rate: 0.10, start: 0, end: 14100, type: 'head_of_household' },

  { tax_rate: 0.12, start: 9876, end: 40125, type: 'single' },
  { tax_rate: 0.12, start: 19751, end: 80250, type: 'married_joint' },
  { tax_rate: 0.12, start: 9876, end: 40125, type: 'married_separate' },
  { tax_rate: 0.12, start: 14101, end: 53700, type: 'head_of_household' },

  { tax_rate: 0.22, start: 40126, end: 85525, type: 'single' },
  { tax_rate: 0.22, start: 80251, end: 171050, type: 'married_joint' },
  { tax_rate: 0.22, start: 40126, end: 85525, type: 'married_separate' },
  { tax_rate: 0.22, start: 53701, end: 85500, type: 'head_of_household' },

  { tax_rate: 0.24, start: 85526, end: 163300, type: 'single' },
  { tax_rate: 0.24, start: 171051, end: 326600, type: 'married_joint' },
  { tax_rate: 0.24, start: 85526, end: 163300, type: 'married_separate' },
  { tax_rate: 0.24, start: 85501, end: 163300, type: 'head_of_household' },

  { tax_rate: 0.32, start: 163301, end: 207350, type: 'single' },
  { tax_rate: 0.32, start: 326601, end: 414700, type: 'married_joint' },
  { tax_rate: 0.32, start: 163301, end: 207350, type: 'married_separate' },
  { tax_rate: 0.32, start: 163301, end: 207350, type: 'head_of_household' },

  { tax_rate: 0.35, start: 207351, end: 518400, type: 'single' },
  { tax_rate: 0.35, start: 414701, end: 622050, type: 'married_joint' },
  { tax_rate: 0.35, start: 207351, end: 311025, type: 'married_separate' },
  { tax_rate: 0.35, start: 207351, end: 518400, type: 'head_of_household' },

  { tax_rate: 0.37, start: 518401, type: 'single' },
  { tax_rate: 0.37, start: 622051, type: 'married_joint' },
  { tax_rate: 0.37, start: 311026, type: 'married_separate' },
  { tax_rate: 0.37, start: 518401, type: 'head_of_household' }
]

export default async (req, res) => {
  const { filing_type, income } = req.query

  const parsedIncome = parseFloat(income)

  if (isNaN(parsedIncome)) return res.status(400).json({ message: 'Please supply income in number form' })

  const { tax_rate } = tax_brackets.find(
    ({ start, end, type }) => (
      type === filing_type &&
      income >= start &&
      (end === undefined ? true : income <= end)
    )
  )

  return res.json({
    tax_rate,
    amount: income * tax_rate,
    after_tax: income - (income * tax_rate)
  })
}