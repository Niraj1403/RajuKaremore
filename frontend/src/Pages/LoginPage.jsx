import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    if (otp === "123456") {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
    setSnackOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Login successful! Welcome to your account.
          </Alert>
        </Snackbar>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {step === 1 ? "Enter Your Phone Number" : "Enter OTP"}
        </h1>
        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}
        {step === 1 ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <TextField
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send OTP
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <TextField
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Verify OTP
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
