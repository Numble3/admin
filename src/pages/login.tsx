import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    //TODO: login API
    navigate('/user');
  };

  return (
    <Box className='grid h-full w-full place-items-center bg-gray-200'>
      <Paper elevation={3} className='rounded-lg p-8'>
        <h1 className='mt-3 mb-10 text-center text-4xl'>관리자 페이지</h1>
        <div className='mb-10 flex flex-col gap-2'>
          <TextField
            sx={{ width: '40ch' }}
            variant='standard'
            value={id}
            color='primary'
            onChange={e => setId(e.target.value)}
            label='아이디를 입력해주세요.'
          />
          <FormControl sx={{ width: '40ch' }} variant='standard'>
            <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
            <Input
              id='standard-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(p => !p)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Button onClick={handleLogin} variant='contained' className='w-full' disabled={!id || !pwd}>
          로그인
        </Button>
      </Paper>
      <footer className='absolute bottom-7 text-gray-400 '>
        Copyrightⓒ2022 Numble Team3. All rights reserved.
      </footer>
    </Box>
  );
}
