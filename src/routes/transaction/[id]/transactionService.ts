import axios from 'axios';

export async function fetchTransaction(transactionId: string) {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/transactions/${transactionId}`);
    return response.data.data;
}
