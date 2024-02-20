import React, { useState } from 'react';

const TextSummarizer = () => {
    const [inputText, setInputText] = useState('');
    const [numSentences, setNumSentences] = useState('');
    const [outputSummary, setOutputSummary] = useState('');
    const [originalText, setOriginalText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        // Example: axios.post('/templates', { inputText, numSentences })
    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Enter Report to Summarize</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            id="input_text"
                                            name="input_text"
                                            rows="6"
                                            placeholder="Enter the report you wish to summarize..."
                                            required
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="num_sentences">Number of Sentences in Summary:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="num_sentences"
                                            name="num_sentences"
                                            min="1"
                                            max="100"
                                            placeholder="Enter the number of sentences"
                                            required
                                            value={numSentences}
                                            onChange={(e) => setNumSentences(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Summarize</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {outputSummary && (
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Summarized Text:</h5>
                                    <p>{outputSummary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {originalText && (
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Original Text:</h5>
                                    <p>{originalText}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextSummarizer;
