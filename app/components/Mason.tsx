import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const heights = [150, 150, 150, 150];

const projects = [
    { title: 'Plan-It', description: 'desc', repoLink: 'https://github.com/jaquevan/Plan-It_bh2024', image: '/images/dirt.png' },
    { title: 'Weather App', description: 'desc', repoLink: 'https://github.com/jaquevan/mp4', image: '/images/dirt.png' },
    { title: 'Dragon Ball Z Info', description: 'desc', repoLink: 'https://github.com/jaquevan/React-Dragon-Ball-Characher-Info', image: '/images/dirt.png' },
    { title: 'FinOctopus', description: 'desc', repoLink: 'https://github.com/project4', image: '/images/dirt.png' },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

export default function Mason() {
    const [selectedProject, setSelectedProject] = React.useState<null | { title: string; description: string; repoLink: string; image: string }>(null);

    const handleClick = (project: { title: string; description: string; repoLink: string; image: string }) => {
        setSelectedProject(project);
    };

    const handleBackClick = () => {
        setSelectedProject(null);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                flexDirection: 'column',
            }}
        >
            {selectedProject ? (
                <>
                    <Button onClick={handleBackClick} variant="outlined">
                    Back to Projects
                </Button>
                    <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            width="700"
                            image={selectedProject.image}
                            alt={selectedProject.title}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {selectedProject.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {selectedProject.description}
                            </Typography>
                            <Button href={selectedProject.repoLink} target="_blank" sx={{ mt: 2 }}>
                                View Repository
                            </Button>
                        </CardContent>
                    </Card>

                </>
            ) : (
                <Masonry columns={4} spacing={2} sx={{ width: '100%', padding: 2 }}>
                    {projects.map((project, index) => (
                        <Item
                            key={index}
                            sx={{ height: heights[index], cursor: 'pointer' }}
                            onClick={() => handleClick(project)}
                        >
                            <Typography variant="h6">{project.title}</Typography>
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{ width: 'auto', height: 80, objectFit: 'cover', marginTop: 1 }}
                            />
                        </Item>
                    ))}
                </Masonry>
            )}
        </Box>
    );
}
