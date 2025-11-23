document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('savings-calculator');
    const resultsOutput = document.getElementById('results-output');

    if (!calculatorForm || !resultsOutput) return;

    calculatorForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const volumeInput = document.getElementById('monthly-volume');
        const feesInput = document.getElementById('monthly-fees');

        const monthlyVolume = parseFloat(volumeInput.value);
        const monthlyFees = parseFloat(feesInput.value);

        // Validation
        if (isNaN(monthlyVolume) || isNaN(monthlyFees) || monthlyVolume <= 0 || monthlyFees <= 0) {
            alert("Please enter valid positive numbers.");
            resultsOutput.classList.add('hidden');
            return;
        }

        // Calculations
        const currentRate = ((monthlyFees / monthlyVolume) * 100).toFixed(2);
        const monthlySavings = monthlyFees.toFixed(2);
        const annualSavings = (monthlyFees * 12).toFixed(2);

        // Format currency
        const formatCurrency = (num) => `$${parseFloat(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Update results
        document.getElementById('current-rate').textContent = `${currentRate}%`;
        document.getElementById('monthly-savings').textContent = formatCurrency(monthlySavings);
        document.getElementById('annual-savings').textContent = formatCurrency(annualSavings);

        // Show results
        resultsOutput.classList.remove('hidden');
        resultsOutput.scrollIntoView({ behavior: 'smooth' });
    });
});
