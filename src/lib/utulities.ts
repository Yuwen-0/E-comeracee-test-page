export function formatNumber(numberString: string): string {
    // Check if the input is not a string or is empty
    if (typeof numberString !== 'string' || numberString === '') {
        throw new Error('Input must be a non-empty string');
    }

    // Remove any leading or trailing whitespace
    const trimmedString = numberString.trim();

    // Split the string into an array of characters
    const charArray = trimmedString.split('');

    // Reverse the array for right-to-left processing
    const reversedArray = charArray.reverse();

    // Join the array into a string with groups of 3 digits separated by commas
    const formattedString = reversedArray.join('').replace(/(\d{3})(?=\d)/g, '$1,');

    // Reverse the string again to restore the original order
    const finalString = formattedString.split('').reverse().join('');

    // Return the final formatted string
    return finalString;
}
  
