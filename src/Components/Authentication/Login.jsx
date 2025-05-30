
import Button from '@mui/material/Button';

function Login() {
  return (
    <div onClick={()=>console.log("clicked me...")} className="flex min-h-svh flex-col items-center justify-center">
      <Button>click me </Button>
    </div>
  )
}

export default Login