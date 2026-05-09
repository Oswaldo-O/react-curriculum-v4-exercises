import { useEffect, useState } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  /* =========================
     Step 1: Create State Variables
     ========================= */
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  /* =========================
     Step 2: Form Population Effect
     ========================= */
  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  /* =========================
     Part 2 - Step 1: Validation Functions
     ========================= */
  function validateName() {
    return name.trim() !== '';
  }

  function validateRating() {
    return rating !== '';
  }

  /* =========================
     Part 2 - Step 2: Error Functions
     ========================= */
  function getNameError() {
    if (!validateName() && touched.name) {
      return 'Snack name is required';
    }
    return '';
  }

  function getRatingError() {
    if (!validateRating() && touched.rating) {
      return 'Please select a rating';
    }
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
    //const name = formData.get('name');
    //const rating = formData.get('rating');

    /* =========================
     Part 3 - Step 1: Mark all fields as touched
     (if user tries to submit invalid form)
     ========================= */

    if (!validateName() || !validateRating()) {
      setTouched({
        name: true,
        rating: true,
      });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      {/* =========================
         Step 3: Convert Inputs to Controlled
         ========================= */}

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          //defaultValue={isEditing ? editingSnack.name : ''}

          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          //required
          className={styles['field-input']}
          placeholder="Enter snack name"
        />

        {getNameError() && <div className={styles.error}>{getNameError()}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          //defaultValue={isEditing ? editingSnack.rating : ''}

          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          //required
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />

        {getRatingError() && (
          <div className={styles.error}>{getRatingError()}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
