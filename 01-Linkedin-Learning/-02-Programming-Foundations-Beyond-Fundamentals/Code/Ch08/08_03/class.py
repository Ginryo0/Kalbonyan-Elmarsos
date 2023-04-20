class Attendee:
    'Common base class for all attendees'

    def __init__(self, name, tickets):
        self.name = name
        self.tickets = tickets

    def displayAttendee(self):
        print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

    def addTicket(self):
        self.tickets += 1
        print('{} tickets increased to {}'.format(self.name, self.tickets))

attende1 = Attendee('B. Gates', 2)
attende2 = Attendee('A. Shakal', 6)

attende2.addTicket()
attende2.addTicket()

attende1.displayAttendee()
attende2.displayAttendee()

