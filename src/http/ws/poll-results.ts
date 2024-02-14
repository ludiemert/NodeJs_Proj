import { FastifyInstance } from "fastify";
import { voting } from "../../utils/voting-pub-sub";
import z from "zod";

//route websocket =>  app.get('/polls/:pollId/results', { websocket: true },
//only the poll, not the total (pollId) ID da enquete nao do total
export async function pollResults(app: FastifyInstance) {
  app.get(
    "/polls/:pollId/results",
    { websocket: true },
    (connection, request) => {
      const getPollParams = z.object({
        pollId: z.string().uuid(),
      });

      const { pollId } = getPollParams.parse(request.params);

      voting.subscribe(pollId, (message) => {
        connection.socket.send(JSON.stringify(message));
      });
    }
  );
}


//inscreve apenas nas mensagens publicadas no canal con ID da enquete('pollId')

//estrutura de Pub/Sub

//gerador de event => Pub/Sub - Publish/Subscribers(inscritos)
