import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from '../API';

const MarkerEntry = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      await createLogEntry(data);
      onClose();
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="title">Place Visited</label>
      <input name="title" required ref={register} autoComplete="off" />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={2} ref={register}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={2} ref={register}></textarea>
      <label htmlFor="image">Image URL</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visited Date</label>
      <input name="visitDate" type="date" required ref={register} />
      <button disabled={loading}>
        {loading ? 'Loading...' : 'Create Entry'}
      </button>
    </form>
  );
};

export default MarkerEntry;
