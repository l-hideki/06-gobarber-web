import React, { useState } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Calendar,
  Appointment,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-Feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
                alt="Lucas"
              />
              <strong>Lucas</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
                  alt="Lucas"
                />
                <strong>Lucas</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
                  alt="Lucas"
                />
                <strong>Lucas</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
                  alt="Lucas"
                />
                <strong>Lucas</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                16:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/53327704?s=460&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
                  alt="Lucas"
                />
                <strong>Lucas</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
